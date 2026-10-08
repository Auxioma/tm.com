import sys
from PIL import Image
# usage: crop.py ref x0 y0 x1 y1 scale out
ref,x0,y0,x1,y1,s,out=sys.argv[1:]
im=Image.open(f"ref/{ref}.jpg").crop((int(x0),int(y0),int(x1),int(y1)))
s=float(s); im=im.resize((int(im.width*s),int(im.height*s)),Image.LANCZOS); im.save(out)
