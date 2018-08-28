import React from 'react';
import './Todo.css';
import DeleteButton from '../DeleteButton/DeleteButton';
import TodoForm from '../TodoForm/TodoForm';

class Todo extends React.Component {
  constructor(props) {
    super(props)

    this.state = { name: '', description: '', list: [] };

    this.onChange = this.onChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    let newList = this.state.list;
    newList.push({ name: this.state.name, description: this.state.description });
    this.setState({ list: newList });
    e.target.parentNode['name'].value = '';
    e.target.parentNode['description'].value = '';
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
          <hr />
        </div>
      )
    });
    return (
      <div className="container">
      <TodoForm onChange={this.onChange} onSubmit={this.onSubmit} />
        <div className="list">{list}</div>
      </div>
    )
  }
}

export default Todo
