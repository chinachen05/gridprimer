from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse,unquote
import xml.etree.ElementTree as ET
import json,sys,os

root=Path('dist')
base=os.environ.get('SITE_URL','https://gridprimer.vercel.app').rstrip('/')
class Page(HTMLParser):
 def __init__(self):
  super().__init__();self.links=[];self.ids=set();self.h1=0;self.title='';self.in_title=False;self.ads=0;self.desc='';self.canonical='';self.lang='';self.viewport=False;self.jsonld=[];self.in_json=False;self.json=''
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='html':self.lang=a.get('lang','')
  if a.get('id'):self.ids.add(a['id'])
  if tag=='a' and a.get('href'):self.links.append(a['href'])
  if tag=='h1':self.h1+=1
  if tag=='title':self.in_title=True
  if tag=='meta' and a.get('name')=='description':self.desc=a.get('content','')
  if tag=='meta' and a.get('name')=='viewport':self.viewport=True
  if tag=='link' and a.get('rel')=='canonical':self.canonical=a.get('href','')
  if tag=='script' and 'pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2936167858814999' in a.get('src',''):self.ads+=1
  if tag=='script' and a.get('type')=='application/ld+json':self.in_json=True;self.json=''
 def handle_endtag(self,tag):
  if tag=='title':self.in_title=False
  if tag=='script' and self.in_json:self.in_json=False;self.jsonld.append(json.loads(self.json))
 def handle_data(self,data):
  if self.in_title:self.title+=data
  if self.in_json:self.json+=data

errors=[];parsed={};files=list(root.rglob('*.html'))
for file in files:
 page=Page();page.feed(file.read_text(encoding='utf8'));parsed[file]=page
 if page.lang!='en' or page.h1!=1 or not page.desc or not page.viewport:errors.append(f'{file}: language, heading, description, or viewport missing')
 if file!=root/'404.html' and not page.canonical.startswith(base+'/'):errors.append(f'{file}: missing production canonical')
 noads={root/'404.html',root/'guides/index.html',root/'tools/index.html',root/'about/index.html',root/'contact/index.html',root/'privacy/index.html',root/'terms/index.html'}
 expected=0 if file in noads else 1
 if page.ads!=expected:errors.append(f'{file}: expected {expected} ad script, found {page.ads}')
 if 'chinachen05@gmail.com' not in file.read_text(encoding='utf8') and file==root/'contact/index.html':errors.append('Contact missing')
 if file.parent.parent==root/'guides' and file.name=='index.html':
  if not page.jsonld or page.jsonld[0].get('@type')!='Article':errors.append(f'{file}: missing Article structured data')
for file,page in parsed.items():
 for href in page.links:
  if href.startswith(('http:','https:','mailto:','tel:')):continue
  url=urlparse(href);dest=file if not url.path else root/unquote(url.path.lstrip('/'))
  if url.path.endswith('/'):dest=dest/'index.html'
  if not dest.exists():errors.append(f'{file}: missing link {href}')
  elif url.fragment and dest in parsed and url.fragment not in parsed[dest].ids:errors.append(f'{file}: missing fragment {href}')
if len({p.title for p in parsed.values()})!=len(files):errors.append('Duplicate page titles')
if len({p.desc for p in parsed.values()})!=len(files):errors.append('Duplicate page descriptions')
articles=list((root/'guides').glob('*/index.html'))
if len(articles)!=25:errors.append(f'Expected 25 articles, got {len(articles)}')
urls=[x.text for x in ET.parse(root/'sitemap.xml').findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url/{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
if len(urls)!=35 or len(set(urls))!=35:errors.append('Sitemap mismatch')
if 'Sitemap: '+base+'/sitemap.xml' not in (root/'robots.txt').read_text():errors.append('robots.txt sitemap mismatch')
if (root/'ads.txt').read_text().strip()!='google.com, pub-2936167858814999, DIRECT, f08c47fec0942fa0':errors.append('ads.txt mismatch')
if errors:print('\n'.join(errors));sys.exit(1)
print(f'PASS: {len(files)} HTML files, {len(articles)} articles, {len(urls)} sitemap URLs; metadata, links, contact and ad configuration checked.')
