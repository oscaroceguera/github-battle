var React = require('react')
var Prompt = require('../components/Prompt')

var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      username: ''
    }
  },
  handlerUpdateUser: function (e) {
    this.setState({
      username: e.target.value
    })
  },
  handleSubmitUser: function (e) {
    e.preventDefault()
    var username = this.state.username // eslint-disable-line
    this.setState({
      username: ''
    })

    if (this.props.routeParams.playerOne) {
      // go to /battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // go to /playerTwo
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },
  render: function () {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handlerUpdateUser}
        header={this.props.route.header}
        username={this.state.username}
      />
    )
  }
})

module.exports = PromptContainer
