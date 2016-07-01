import yaml
from mako.template import Template
from mako.lookup import TemplateLookup
import os
import os.path
import re
import sys
import shutil

# TODO:
# - errors when overwriting files (e.g. when category name is same as page name)
# - error handling (file not found, dictionary key missing, ...)
# - create output directories if not exists
# - content blocks other than sidebar?
# - custom template directory

current_dir = os.path.dirname(os.path.abspath(__file__))
lookup = TemplateLookup(directories=['.'])

conffile = "site_en.yaml" if len(sys.argv) == 1 else sys.argv[1]

stream = open(conffile, 'r')
config = yaml.load(stream)

inputdir = config.get('inputdir', 'input')
outputdir = config.get('outputdir', 'output')

author = config.get('author')

sidebarfile = config.get('sidebarfile', "sidebar.html")
sidebarPath = config['inputdir'] + "/" + sidebarfile
sidebar = None
if os.path.isfile(sidebarPath):
	sidebarhandle = open(sidebarPath, 'r')
	sidebar = sidebarhandle.read().decode("utf-8")

menu = config['menu']

templatefile = config.get('templatefile', "template.html")
tmpl = lookup.get_template(templatefile)

if 'categories' in config:
	categorytemplatefile = config.get('categorytemplatefile', "categorytemplate.html")
	listTmpl = lookup.get_template(categorytemplatefile)

for page in menu:
	if 'contents' in page:
		print("rendering page " + page['title'])
		contenthandle = open(inputdir + "/" + page['contents'], 'r')
		contents = contenthandle.read().decode("utf-8")
		outp = tmpl.render(description=page.get('description'),
			               keywords=page.get('keywords'),
			               author=author,
			               title=page['title'],
			               currentpage=page['contents'],
			               sidebar=sidebar,
			               contents=contents,
			               menu=menu).encode("utf-8")
		outpfile = open(outputdir + '/' + page['contents'], 'w')
		outpfile.write(outp)
		outpfile.close()

if 'categories' in config:
	for category in config['categories']:
		print("rendering list for category " + category['title'])

		catDescHandle = open(inputdir + '/' + category['contents'], 'r')
		catDesc = catDescHandle.read().encode("utf-8")

		catList = listTmpl.render(items=category['items'], title=category['title'])

		print("rendering category " + category['title'])

		outp = tmpl.render(description=None,
			               keywords=None,
			               author=author,
			               title=category['title'],
			               currentpage=category['url'],
			               sidebar=sidebar,
			               contents=catList,
			               menu=menu)
		outpfile = open(outputdir + '/' + category['url'], 'w')
		outpfile.write(outp.decode("utf-8"))
		outpfile.close()

		for item in category['items']:
			contenthandle = open(inputdir + "/" + item['contents'], 'r')
			contents = contenthandle.read().encode("utf-8")
			outp = tmpl.render(description=item.get('description'),
				               keywords=item.get('keywords'),
				               author=author,
				               title=item['title'],
				               currentpage=item['contents'],
				               sidebar=sidebar,
				               contents=contents,
				               menu=menu)
			outpfile = open(outputdir + '/' + item['contents'], 'w')
			outpfile.write(outp.decode("utf-8"))
			outpfile.close()

alsocopy = config['alsocopy']
for (path, pathnames, filenames) in os.walk(inputdir):
	for fn in filenames:
		fullname = path + "/" + fn
		for regex in alsocopy:
			if re.search(regex, fn):
				newpath = outputdir + '/' + path[len(inputdir):]
				if newpath and not os.path.exists(newpath):
					os.makedirs(newpath)

				shutil.copy2(fullname, newpath + '/' + fn)
