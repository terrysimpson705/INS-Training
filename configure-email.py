"""Configure PUBLIC settings and rebuild index.html. Never use an API key here."""
import argparse
import json
from pathlib import Path
import subprocess
import sys
import re
from urllib.parse import urlsplit

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--endpoint')
parser.add_argument('--site-key', help='Public Turnstile site key')
parser.add_argument('--service', choices=['gmail', 'resend'], default='gmail')
parser.add_argument('--disable', action='store_true')
args = parser.parse_args()
if not args.disable:
    url = urlsplit(args.endpoint or '')
    if args.service == 'gmail':
        if not re.fullmatch(r'https://script\.google\.com/macros/s/[A-Za-z0-9_-]+/exec', args.endpoint or ''):
            parser.error('--endpoint must be the deployed Google web app URL ending in /exec')
    elif url.scheme != 'https' or not url.hostname or url.username or url.password or url.path != '/certificate' or url.query or url.fragment:
        parser.error('--endpoint must be an HTTPS URL ending in /certificate')
    if not args.site_key or not args.site_key.isascii() or not args.site_key.replace('-', '').replace('_', '').isalnum() or args.site_key.startswith('re_'):
        parser.error('Use a PUBLIC Turnstile site key, never a Resend API key')
source = Path(__file__).resolve().parent / 'editable-source'
path = source / 'training-data.json'
data = json.loads(path.read_text(encoding='utf8'))
if args.disable:
    data.setdefault('emailDelivery', {})['enabled'] = False
else:
    data['emailDelivery'] = {'enabled': True, 'provider': 'apps-script' if args.service == 'gmail' else 'endpoint', 'service': args.service, 'endpoint': args.endpoint, 'turnstileSiteKey': args.site_key}
path.write_text(json.dumps(data, ensure_ascii=False, separators=(',', ':')), encoding='utf8')
subprocess.run([sys.executable, str(source / 'build.py')], check=True)
print('Upload the rebuilt index.html. Email sending is ' + ('disabled.' if args.disable else 'configured; a live delivery test is still required.'))
