import json,subprocess,base64
from pathlib import Path
from PIL import Image
import io
entries=json.loads(Path('scripts/drive-artworks.json').read_text());crops=json.loads(Path('scripts/artwork-crops.json').read_text())
for reference,name in [('MRL09202','hero-crimson-landscape'),('MRL09215','hero-night-on-water'),('MRL09186','hero-blue-currents')]:
 if Path('public/assets/'+name+'.svg').exists():
  continue
 entry=next(e for e in entries if e['reference']==reference)
 result=subprocess.run(['curl.exe','-L','--fail','--silent','--show-error','--retry','2','--max-time','120','https://drive.google.com/thumbnail?id='+entry['id']+'&sz=w3200'],capture_output=True,check=True)
 im=Image.open(io.BytesIO(result.stdout));w,h=im.size
 encoded=io.BytesIO();im.convert('RGB').save(encoded,'WEBP',quality=93,method=6)
 l,t,r,b=crops[reference[3:]];view=' '.join(str(round(v,2)) for v in (l*w,t*h,(r-l)*w,(b-t)*h))
 payload=base64.b64encode(encoded.getvalue()).decode()
 Path('public/assets/'+name+'.svg').write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{view}" width="{round((r-l)*w)}" height="{round((b-t)*h)}"><image width="{w}" height="{h}" href="data:image/webp;base64,{payload}"/></svg>')
 print(name,round((r-l)*w),round((b-t)*h),flush=True)
