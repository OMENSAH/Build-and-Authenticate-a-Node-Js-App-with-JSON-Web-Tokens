const express = require('express');
const passport = require('passport');
const router = express.Router();
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
const request = require('request');

const env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
};

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {env: env});
});

router.get('/login', (req, res) => {
  res.render('login', {env: env});
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/polls', ensureLoggedIn, (req, res) => {
  request('http://elections.huffingtonpost.com/pollster/api/charts.json?topic=2016-president', function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const polls = JSON.parse(body);
      res.render('polls', {user: req.user, polls: polls});
    } else {
      res.render('error');
    }
  })
});

router.get('/user', ensureLoggedIn, (req, res, next) => {
  res.render('user', {user: req.user});
});

router.get('/callback', passport.authenticate('auth0',
  {failureRedirect: '/url-if-something-fails'}), (req, res) => {
  res.redirect(req.session.returnTo || '/polls');
});

module.exports = router;
