from pathlib import Path
import json
root=Path(__file__).resolve().parent
data=json.loads((root/'training-data.json').read_text(encoding='utf8'))
encoded=json.dumps(data,ensure_ascii=False,separators=(',',':')).replace('</',r'<\/')
page=(root/'template.html').read_text(encoding='utf8').replace('__CSS__',(root/'style.css').read_text(encoding='utf8')).replace('__DATA__',encoded).replace('__JS__',(root/'app.js').read_text(encoding='utf8'))
(root.parent/'index.html').write_text(page,encoding='utf8')
print('Rebuilt',root.parent/'index.html')
