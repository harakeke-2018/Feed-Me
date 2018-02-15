import React from 'react'

class SelectedProfile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div id='selectedUser'>
        <img src={`images/${this.props.user.name}.jpg`} id='mainProfile'></img>
        <h2>{this.props.user.name}</h2>
        <ul>
          {this.props.user.comments.map((user, id) => {
            return <li key={id} className="commentList">{user}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default SelectedProfile
