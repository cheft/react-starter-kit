var React = require('react')

var List = React.createClass({

  getInitialState() {
    return {todos: this.props.todos}
  },

  edit: function(item, i) {
    this.props.callback(item, i);
  },

  remove: function(i) {
    var todos = this.state.todos
    todos.splice(i, 1)
    this.setState({todos: todos})
  },

  render: function() {
    var _this = this

    var createItem = function(item, i) {
      return (
        <li key={item.id}>
          <span onClick={_this.edit.bind(_this, item, i)}>{item.text}</span>
          <a href="javascript:;" onClick={_this.remove.bind(_this, i)}>x</a>
        </li>
      )
    }
    return <ul>{this.state.todos.map(createItem)}</ul>
  }
});

module.exports = React.createClass({
  getInitialState: function() {
    return { index: -1, todos: [{id: 1, text: 'todo'}] }
  },

  onEnter: function(e) {
    if (e.which === 13) {
      var todos = this.state.todos
      if (todos[this.state.index]) {
        todos[this.state.index].text = e.target.value
      } else {
        todos.push({id: todos.length + 1, text: e.target.value})
      }
      e.target.value = ''
      this.setState({index: -1, todos: todos})
    }
  },

  callback: function(item, i) {
    this.refs.todoText.value = item.text
    this.setState({index: i})
  },

  render: function() {
    return (
      <div>
        <input ref="todoText"  onKeyPress={this.onEnter} />
        <List todos={this.state.todos} callback={this.callback}/>
      </div>
    )
  }
})
