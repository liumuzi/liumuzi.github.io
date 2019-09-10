# A script for generating files of new categories

import sys

arg = sys.argv[1:]
if len(arg) < 3:
	print("Usage: tag1 , description1 ; tag2 , description2 ; ...")

tag = ""
des = ""
tagend = 0
for x in arg:
	if x == ",":
		tagend = 1
		continue
	elif x == ";":
		tagend = 0

		tag = tag.strip()
		if des == "":
			des = "Projects and research works using techonlogies of " + tag + "."
		f = open("_categories/" + tag + ".md", "w+")
		f.write("---\nname: " + tag + "\n---\n" + des)

		tag = ""
		des = ""
		continue

	elif tagend == 0:
		tag = tag + x + " "
	elif tagend == 1:
		des = des + x + " "

