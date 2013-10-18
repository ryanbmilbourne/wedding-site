var express = require('express')
  , app = express()
  , cons = require('consolidate')
  , connect = require('connect')
  , swig = require('swig')
  , logger = require('./logger')
  , Session = require('connect-mongodb')
  , path = require('path')
  , Db = require('mongodb').Db
  , Server = require('mongodb').Server
  , mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
app.use(express.compress());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session(
    {store: new Session({
        db: new Db('test', new Server('localhost',27017, {auto_reconnect:true, native_parser:true, safe:true}))
    }),
    cookie: {maxAge: 300000},
    secret:'thisisacorrecthorsesecretbatterystaplesecret'}
));


app.engine('swig',cons.swig);
app.set('view engine','swig');

swig.init({
  cache : app.get('env') === 'production',
  //root: '/var/node/templates/',
  //root : path.join('/home/rmilbourne/wedding-site/','..','templates');
  root: '/var/wedding-site/templates/',
  allowErrors:true
});
//app.set('views','/var/node/templates/');
//app.use(connect.static('/var/node/public', { maxAge: /*86400000*/60000 }));
app.set('views','/var/wedding-site/templates');
app.use(connect.static('/var/wedding-site/public', { maxAge: /*86400000*/60000 }));


module.exports = { //ALL_CAPS represent static values, lowercase_stuff are dynamically required resources
  EXPRESS_PORT: 80,
  EXPRESS_BAK_PORT: 8080,
  DEBUG: true,
  express : express,
  app : app, //one app to rule them all
  cons : cons,
  connect: connect,
  swig: swig,
  logger: logger,
  mongoose: mongoose,
  //NODE_ROOT: '/var/node/',
  NODE_ROOT: '/var/wedding-site',
  //UPLOAD_DIR: '/var/node/public/uploads/',
  UPLOAD_DIR: '/var/wedding-site/public/uploads/',
  PUBLIC_UPLOAD_DIR: '/uploads/',
  NAME: 'Ryan&Hayley',
  EVENT_DESCRIPTION: 'Wedding',
  EVENT_DATE: 'August 02, 2014',
  EVENT_LOCATION_LINK: '<a href="https://maps.google.com/">The world!</a>'
};
