import json, subprocess, io
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from PIL import Image, ImageOps
entries=json.loads(Path('scripts/drive-artworks.json').read_text())
out=Path('public/assets/drive-artworks');out.mkdir(exist_ok=True)
def download(entry):
    target=out/(entry['reference']+'.webp')
    if target.exists(): return entry['reference']+' cached'
    result=subprocess.run(['curl.exe','-L','--fail','--silent','--show-error','--retry','2','--max-time','120','https://drive.google.com/thumbnail?id='+entry['id']+'&sz=w1800'],capture_output=True,check=True)
    im=ImageOps.exif_transpose(Image.open(io.BytesIO(result.stdout))).convert('RGB')
    im.thumbnail((1800,1800))
    im.save(target,'WEBP',quality=88,method=6)
    return entry['reference']+' ready'
with ThreadPoolExecutor(max_workers=8) as pool:
    for message in pool.map(download,entries): print(message,flush=True)
print('All 50 artwork images saved.',flush=True)
