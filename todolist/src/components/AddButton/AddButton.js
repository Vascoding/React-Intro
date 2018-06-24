import React from 'react';

class AddTodo extends React.Component {
  render () {
    return <button type="button" onClick={this.props.onClick}>{this.props.name}</button>
  }
}

export default AddTodo
