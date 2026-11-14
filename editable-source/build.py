from pathlib import Path
import json
root=Path(__file__).resolve().parent
data=json.loads((root/'training-data.json').read_text(encoding='utf8'))
config=data.get('emailDelivery',{})
if any(config.get(k) for k in ['privateKey','accessToken','apiKey','password']):
 raise ValueError('Never include private email credentials in the browser configuration.')
encoded=json.dumps(data,ensure_ascii=False,separators=(',',':')).replace('</',r'<\/')
page=(root/'template.html').read_text(encoding='utf8').replace('__CSS__',(root/'style.css').read_text(encoding='utf8')).replace('__DATA__',encoded).replace('__PDF_LIB__',(root/'pdf-lib.min.js').read_text(encoding='utf8').replace('</script',r'<\/script')).replace('__CERTIFICATE_JS__',(root/'certificate.js').read_text(encoding='utf8')).replace('__SIGN_ON_JS__',(root/'sign-on.js').read_text(encoding='utf8')).replace('__JS__',(root/'app.js').read_text(encoding='utf8'))
(root.parent/'index.html').write_text(page,encoding='utf8')
print('Rebuilt',root.parent/'index.html')
