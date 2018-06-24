import React from 'react';
import AddButton from '../AddButton/AddButton';
import './TodoForm.css';

class TodoForm extends React.Component {
  render () {
    return (
      <div className="container">
        <form className="todoform">
          Topic
        <div className="form-control">
            <input onChange={this.props.onChange} type="text" name="name" />
          </div>
          <br />
          TO DO
           <div className="form-control">
            <textarea onChange={this.props.onChange} type="text" name="description" rows="10"></textarea>
          </div>
          <br />
          <AddButton name="Add ToDo" onClick={this.props.onSubmit} />
        </form>
      </div>
    )
  };
}

export default TodoForm
