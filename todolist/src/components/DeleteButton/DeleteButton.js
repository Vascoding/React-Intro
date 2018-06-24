import React from 'react'



class DeleteButton extends React.Component {
  onDelete(e) {
    e.target.parentNode.remove();
  }

  render () {
    return  <button type="button" onClick={this.onDelete}>Delete</button>
  }
}

export default DeleteButton
