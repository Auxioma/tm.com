"""Extract photographic assets from reference mockups.
crop: (x0,y0,x1,y1) in ref px. clean: list of boxes (absolute ref coords) where
bright / light-blue / orange text is removed by inpainting. fill: boxes fully replaced by inpaint."""
import cv2, numpy as np, sys, os, json
OUT='../public/img'
def load(ref): return cv2.imread(f'ref/{ref}.jpg')
def text_mask(reg, kind):
    b,g,r=[reg[:,:,i].astype(int) for i in range(3)]
    lum=(r*299+g*587+b*114)//1000
    m=np.zeros(lum.shape,np.uint8)
    if 'w' in kind: m|=((lum>175)&(np.abs(r-b)<70)).astype(np.uint8)
    if 'b' in kind: m|=((b>170)&(b-r>55)).astype(np.uint8)
    if 'o' in kind: m|=((r>200)&(r-b>90)&(g>70)).astype(np.uint8)
    if 'W' in kind: m|=((lum>228)&(np.abs(r-b)<40)).astype(np.uint8)
    if 'd' in kind: m|=(lum<90).astype(np.uint8)
    return m
def run(ref,name,crop,clean=(),fill=(),q=88):
    img=load(ref); mask=np.zeros(img.shape[:2],np.uint8)
    for c in clean:
        x0,y0,x1,y1=c[:4]; kind=c[4] if len(c)>4 else 'wb'; dil=c[5] if len(c)>5 else 3
        m=text_mask(img[y0:y1,x0:x1],kind)
        m=cv2.dilate(m,np.ones((3,3),np.uint8),iterations=dil)
        mask[y0:y1,x0:x1]|=m
    for x0,y0,x1,y1 in fill: mask[y0:y1,x0:x1]=1
    if mask.any(): img=cv2.inpaint(img,mask*255,6,cv2.INPAINT_TELEA)
    x0,y0,x1,y1=crop
    os.makedirs(OUT,exist_ok=True)
    cv2.imwrite(f'{OUT}/{name}.jpg',img[y0:y1,x0:x1],[cv2.IMWRITE_JPEG_QUALITY,q])
if __name__=='__main__':
    import importlib; cfg=importlib.import_module('assets'); 
    for a in cfg.ASSETS:
        if len(sys.argv)<2 or a[0] in sys.argv[1:] or a[1] in sys.argv[1:]: run(*a[:3],**(a[3] if len(a)>3 else {}))
