var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('../config/routes')
var Raven = require('raven-js')

var sentrykey = 'a4d8fd8465664d7d8917d5a6338bbb06'
var sentryApp = '112492'
var sentryURL = 'http://' + sentrykey + '@app.getsentry.com/' + sentryApp

var _APP_INFO = {
  name: 'OScar Oceguera',
  branch: 'video 4',
  version: '1.0'
}

Raven.config(sentryURL, {
  release: _APP_INFO.version,
  tags: {
    branch: _APP_INFO.branch,
    github_commit: 'QWERYHGBFVCD23456543'
  }
}).install()

console.log(window.thing.nope);

ReactDOM.render(
  routes,
  document.getElementById('app')
);
