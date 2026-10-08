import sys
from PIL import Image, ImageDraw
# grid.py ref x0 y0 x1 y1 scale out [step]
ref,x0,y0,x1,y1,s,out=sys.argv[1:8]; step=int(sys.argv[8]) if len(sys.argv)>8 else 10
x0,y0,x1,y1=map(int,(x0,y0,x1,y1)); s=float(s)
src=ref if ('/' in ref or ref.endswith('.png')) else f'ref/{ref}.jpg'
im=Image.open(src).convert('RGB').crop((x0,y0,x1,y1))
im=im.resize((int(im.width*s),int(im.height*s)),Image.NEAREST)
d=ImageDraw.Draw(im,'RGBA')
for x in range((x0//step+1)*step,x1,step):
    X=(x-x0)*s; big=x%50==0
    d.line([(X,0),(X,im.height)],fill=(255,0,0,110 if big else 40))
    if big: d.text((X+2,2),str(x),fill=(255,0,0,255))
for y in range((y0//step+1)*step,y1,step):
    Y=(y-y0)*s; big=y%50==0
    d.line([(0,Y),(im.width,Y)],fill=(0,160,0,110 if big else 40))
    if big: d.text((2,Y+2),str(y),fill=(0,140,0,255))
im.save(out)
