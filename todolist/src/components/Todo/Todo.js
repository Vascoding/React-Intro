import React from 'react'
import './Todo.css';
import DeleteButton from '../DeleteButton/DeleteButton';
import AddTodo from '../AddTodo/AddTodo';

class Todo extends React.Component {
  constructor(props) {
    super(props)

    this.state = { name: '', description: '', list: [] }

    this.onChange = this.onChange.bind(this)

    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    let newList = this.state.list
    newList.push({ name: this.state.name, description: this.state.description })
    this.setState({ list: newList })
  }

  render() {
    let list = this.state.list.map((t, i) => {
      return (
        <div key={`${t.name}-${i}`}>
          <div className="todoname">{t.name}</div>
          <br />
          <div className="tododescription">{t.description}</div>
          <br />
          <DeleteButton />
          <br />
          <hr />
        </div>
      )
    })
    return (
      <div className="container">
        <form className="todoform">
          Topic
        <div className="form-control">
            <input onChange={this.onChange} type="text" name="name" value={this.state.name} />
          </div>
          <br />
          TO DO
           <div className="form-control">
            <textarea onChange={this.onChange} type="text" name="description" value={this.state.description} rows="10"></textarea>
          </div>
          <br />
          <AddTodo name="Add ToDo" onClick={this.onSubmit} />
        </form>
        <div className="list">{list}</div>
      </div>
    )
  }
}

export default Todo
