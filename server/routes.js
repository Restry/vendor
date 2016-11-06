var express = require('express'),
  path = require('path'),
  jwt = require('jsonwebtoken'),
  utils = require('./utils'),
  rootPath = path.normalize(__dirname + '/../'),
  apiRouter = express.Router(),
  router = express.Router();

import model from './models/user';

let {User, Needs} = model;


module.exports = function (app) {
  // Users
  // all users
  apiRouter.get('/users', authenticate, function (req, res) {
    User.find({}, function (err, users) {
      res.json(users);
    });
  });

  apiRouter.get('/needs', function (req, res) {
    Needs.find({}, function (err, allNeeds) {
      res.json(allNeeds);
    });
  });

  apiRouter.post('/needs', authenticate, function (req, res) {
    let newNeeds = new Needs({
      title: req.body.title,
      category: req.body.category,
      notes: req.body.notes,
      states: req.body.states,
      vendor: req.body.vendor,
      created: new Date()
    });
    console.log(`Needs opers authed ${JSON.stringify(req.body)}`);
    newNeeds.save(function (err, need) {
      if (err) throw err;

      // send token
      res.json({
        success: true,
        message: 'Successfully post a needs!',
        need: newNeeds
      });
    });
  });

  // add user
  apiRouter.post('/users', function (req, res) {

    utils.hashPwd(req.body.password).then(function (hashedPwd) {

      var newUser = new User({
        email: req.body.email,
        password: hashedPwd,
        admin: false,
        nickname: req.body.nickname,
        residence: req.body.residence,
        phone: req.body.phone,
        captcha: req.body.captcha,
        agreement: req.body.agreement
      });

      newUser.save(function (err) {
        if (err) throw err;

        // create token
        var token = jwt.sign(newUser, app.get('superSecret'), {
          expiresInminutes: 1440
        });

        newUser.password = undefined;

        // send token
        res.json({
          success: true,
          message: 'Successfully authenticated!',
          token: token,
          user: newUser
        });
      });
    });

  });

  // authenticate user
  apiRouter.post('/users/auth', function (req, res) {

    // add back the password field for this query
    var query = User.findOne({
      email: req.body.email
    }).select('_id email +password nickname');

    query.exec(function (err, user) {
      if (err) throw err;

      if (!user) {
        res.json({
          success: false,
          message: 'No user with that email'
        });
      } else if (user) {

        // check password
        utils.comparePwd(req.body.password, user.password).then(function (isMatch) {
          if (!isMatch) {
            res.json({
              success: false,
              message: 'Wrong password'
            });
          } else {

            user.password = undefined;

            // create token
            var token = jwt.sign(user, app.get('superSecret'), {
              expiresInminutes: 1440
            });


            // send token
            res.json({
              success: true,
              message: 'Successfully authenticated!',
              token: token,
              user: user
            });
          }
        });
      }
    });
  });

  // angularjs catch all route
  // router.get('/*', function (req, res) {
  //   res.sendFile(rootPath + 'public/index.html', {
  //     user: req.user
  //   });
  // });

  app.use('/api', apiRouter);
  app.use('/', router);

  // middleware
  function authenticate(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    console.log(req.headers);
    if (token) {

      // verify token validity
      jwt.verify(token, app.get('superSecret'), function (err, decoded) {
        if (err) {
          return res.json({
            success: false,
            message: 'Failed to authenticate token.'
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });

    } else {

      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });

    }
  }
};
