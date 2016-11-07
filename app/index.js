var React = require('react')
var ReactDOM = require('react-dom')

var HelloWord = React.createClass({
  render: function () {
    return (
      <div>
        Hepa' compadre! loco
      </div>
    )
  }
})

ReactDOM.render(
  <HelloWord />,
  document.getElementById('app')
)
