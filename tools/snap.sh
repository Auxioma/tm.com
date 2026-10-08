#!/bin/sh
# snap.sh route name  -> tools/out/name.png (1024px full page)
mkdir -p out
node shot.mjs "http://localhost:5173$1" "out/$2.png" 1024 1 && python -c "from PIL import Image;im=Image.open('out/$2.png');print('height',im.size)"
