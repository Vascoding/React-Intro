import React from 'react'

class Todo extends React.Component {
  constructor(props) {
    super(props)

    this.state = { name: '', description: '', list: [] }

    this.onChange = this.onChange.bind(this)

    this.onSubmit = this.onSubmit.bind(this)
    this.onSubmit.preventDefault();
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

  onDelete(e) {
    e.target.parentNode.remove()
  }

  render() {
    let list = this.state.list.map((t, i) => {
      return (
        <div key={`${t.name}-${i}`}>
          <div className="todoname">{t.name}</div>
          <br />
          <div className="tododescription">{t.description}</div>
          <br />
          <button type="button" onClick={this.onDelete}>Delete</button>
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
          <button type="button" onClick={this.onSubmit}>Add ToDo</button>
        </form>
        <div className="list">{list}</div>
      </div>
    )
  }
}

export default Todo
