var React = require('react')
var ConfirmBattle = require('../components/ConfirmBattle')
var githubHelpers = require('../utils/githubHelpers')

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    console.log('getInitialState');
    return {
      isLoading: true,
      playerInfo: []
    }
  },
  componentWillMount: function () {
    console.log('componentWillMount');
  },
  componentDidMount: function () {
    console.log('componentDidMount');
    var query = this.props.location.query
    var that = this
    // Fetch info from github then update state
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
      .then(function (players) {
        that.setState({
          isLoading: false,
          playerInfo: [players[0], players[1]]
        })
      })
  },
  componentWillReciveProps: function () {
    console.log('componentWillReciveProps');
  },
  componentWillUnmount: function () {
    console.log('componentWillUnmount');
  },
  render: function () {
    return (
      <ConfirmBattle
      isLoading={this.state.isLoading}
      playersInfo={this.state.playerInfo} />
    )
  }
})

module.exports = ConfirmBattleContainer
