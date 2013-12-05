wedding-site
============

Forked from gcochard/wedding-site.

node.js wedding (or event) website framework

Wedding website framework using mongoose.js, bootstrap, and many other OSS components.  
Take a look at the package.json and public/bower.json files to see what packages are in use.

Requires node.js, npm.

Setup
=====

1. Install libcap2-bin, nodejs and npm packages.  If on Ubuntu, be sure to install current version of nodejs by adding the correct repository to apt, as the current distributed version in apt is severl versions behind.
2. cd to root directory of the package and issue `npm i` to install needed modules.  These modules are outlined in package.json
3. We need to install the needed bower components.  cd to ../wedding-site/public and issue `../node_modules/.bin/bower install` to grab the needed components.
4. We'll need to install mongodb.  Ubuntu pulls down a deprecated version, so follow the Ubuntu directions here:
  http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/
5. Now, issue the following: `$ sudo setcap cap_net_bind_service=+ep <location of nodejs binary>` 
   this will allow non-root users to bind a port.
6. Issue `$ nodejs app.js` from root package directory to start wedding-site.  
   pull up the site to test that the HTTP server is working and handling requests.

Customization
=============

1. Edit the files in ../wedding-site/public
   1. Upload selected images into ../wedding-site/public/images/engagement-photos
   2. bower.js		Edit the name field.
2. Customize the package name in package.json to reflect your site name.
3. Edit the files in ../wedding-site/templates.
   1. layout.html:	Edit to display the correct heading and proper information. Also be sure to alter the layout colors to match the desired wedding colors.  This must also be done in ../wedding-site/public/css/main.css.
   1. contact.swig:	Edit the block content to show the correct location and google maps URL.
   2. index.swig:	Edit the header image in the block content.
   3. manager.swig:	Edit the block title text to show correct names.
   4. photos.swig:	No edits needed.  
4. Edit ../wedding-site/routes/send.js to have proper email parameters.

