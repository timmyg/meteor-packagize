meteor-packagize
================

Boilerplate for creating a new meteorite package (using example of creating package "helloworld")

1. Download boilerplate (git clone https://github.com/timmyg/meteor-packagize meteor-helloworld)
2. Import necessary js, css, etc. files that will be needed for package
3. Edit imports in package.js to import all necessary files
4. Edit all info in smart.json and, summary in package.js, and don't forget your README.md
5. Test out your package locally by inputting local path in your smart.json and running "mrt add helloworld" (helloworld comes from your package name in smart.json below)
	{
	  "packages": {
	    "helloworld": {
	      "path": "../meteor-packages/meteor-helloworld"
	    }
	  }
	}
6. When everything is working, push to a git repo.
7. Sign up for an atmosphere account if you haven't already done so.
8. mrt release helloworld
9. mrt publish helloworld
10. Check to make sure it is in atmosphere!