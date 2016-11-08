var axios = require('axios')

var id = "c9992a2f133fae7fe7b5"
var sec = "c6312190aaad9bc69d760f26833afdbbd12c1985"
var param = "?client_id=" + id + "&client_secret=" + sec

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

var helpers = {
  getPlayersInfo: function (players) {
    // fetch some data from Githu
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    }))
    .then(function (info) {
      return info.map(function (user) {
        return user.data
      })
    })
    .catch(function (err) {
      console.log('Error in getPlayersInto', err);
    })
  }
};

module.exports = helpers
