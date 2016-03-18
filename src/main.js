var React = require('react');

var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>
  }
});

React.render(<Hello name="cheft" />, document.body);
