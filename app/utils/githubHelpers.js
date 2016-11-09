var axios = require('axios')

var id = "c9992a2f133fae7fe7b5"
var sec = "c6312190aaad9bc69d760f26833afdbbd12c1985"
var param = "?client_id=" + id + "&client_secret=" + sec

function getUserInfo (username) {
  return axios.get('https://api.github.com/users/' + username + param)
}

function getRepos (username) {
  // fetch usernames repost
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100')
}

function getTotalStars (repos) {
  // calculate all the stars that the user has
  return repos.data.reduce(function (prev, current) {
    return prev + current.stargazers_count
  }, 0)
}

function getPLayersData (player) {
    // get repos
    // getTotalStars
    // return object with that data
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function (totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores (players) {
  // return an array, after doing some fancy algorithms to determine a winner
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
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
  },
  battle: function (players) {
    var playerOnewData = getPLayersData(players[0])
    var playerTwoData = getPLayersData(players[1])

    return axios.all([playerOnewData, playerTwoData])
      .then(calculateScores)
      .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
  }
};

module.exports = helpers
