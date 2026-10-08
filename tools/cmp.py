import sys
from PIL import Image, ImageDraw, ImageChops
# cmp.py ref render.png out y0 y1 [x0 x1] [scale] [mode=side|blend|both]
ref,ren,out,y0,y1=sys.argv[1:6]; y0,y1=int(y0),int(y1)
x0=int(sys.argv[6]) if len(sys.argv)>6 else 0; x1=int(sys.argv[7]) if len(sys.argv)>7 else 1024
s=float(sys.argv[8]) if len(sys.argv)>8 else 1; mode=sys.argv[9] if len(sys.argv)>9 else 'side'
A=Image.open(f'ref/{ref}.jpg').convert('RGB'); B=Image.open(ren).convert('RGB')
if B.height<y1: nb=Image.new('RGB',(B.width,y1),(255,0,255)); nb.paste(B,(0,0)); B=nb
a=A.crop((x0,y0,x1,y1)); b=B.crop((x0,y0,x1,y1))
def sc(im): return im.resize((int(im.width*s),int(im.height*s)),Image.LANCZOS)
a,b=sc(a),sc(b)
def grid(im):
    d=ImageDraw.Draw(im,'RGBA')
    for y in range((y0//50+1)*50,y1,50):
        Y=(y-y0)*s; d.line([(0,Y),(im.width,Y)],fill=(0,200,0,90)); d.text((2,Y+1),str(y),fill=(0,150,0,255))
    for x in range((x0//50+1)*50,x1,50):
        X=(x-x0)*s; d.line([(X,0),(X,im.height)],fill=(255,0,0,60)); d.text((X+2,1),str(x),fill=(255,0,0,255))
    return im
if mode=='blend':
    o=grid(Image.blend(a,b,0.5))
elif mode=='stack':
    o=Image.new('RGB',(a.width,a.height*2+4),(255,0,255)); o.paste(grid(a),(0,0)); o.paste(grid(b),(0,a.height+4))
else:
    o=Image.new('RGB',(a.width*2+4,a.height),(255,0,255)); o.paste(grid(a),(0,0)); o.paste(grid(b),(a.width+4,0))
o.save(out)
