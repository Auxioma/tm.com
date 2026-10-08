import sys
from PIL import Image
ref=sys.argv[1]; im=Image.open(f"ref/{ref}.jpg").convert("RGB")
for p in sys.argv[2:]:
    x,y=map(int,p.split(','))
    # median of 3x3
    vals=[im.getpixel((x+i,y+j)) for i in(-1,0,1) for j in(-1,0,1)]
    r=sorted(v[0] for v in vals)[4];g=sorted(v[1] for v in vals)[4];b=sorted(v[2] for v in vals)[4]
    print(p, '#%02x%02x%02x'%(r,g,b))
