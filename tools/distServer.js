import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

let mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  methodOverride = require('method-override'),
  expressJwt = require('express-jwt'),
  morgan = require('morgan'),
  cors = require('cors');
/*eslint-disable no-console */


const app = express();

app.use(compression());
app.use(express.static('dist'));


// ENVIRONMENT CONFIG
let env =  'production',
	envConfig = require('../server/env')[env];

console.log(`Current process env is : ${process.env.NODE_ENV}`);

mongoose.connect(envConfig.db);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Open connection at : '+(new Date()).toLocaleString());
});

// EXPRESS CONFIG
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));


// JWT config
let jwtSecret = 'thupers3crT$12';
app.set('superSecret', jwtSecret);

// ROUTES
require('../server/routes')(app);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'), {
      user: req.user
    });
});


app.listen(envConfig.port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Linsten at http://localhost:${envConfig.port}`);
  }
});
