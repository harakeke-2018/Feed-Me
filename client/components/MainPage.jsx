import React from 'react'
import SelectedProfile from './SelectedProfile'
import UserList from './UserList'

class MainPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentUser: { name: 'Ethan', comments: ['Test comment', 'Hello', 'Another Comment'] }
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this)
  }

  updateCurrentUser (passedPerson) {
    this.setState(
      {
        currentUser: {
          name: passedPerson,
          comments: ['Test', 'Test 1', 'Test 2']}
      }
    )
  }

  render () {
    return (
      <div>
        <SelectedProfile user={this.state.currentUser} />
        <UserList updateCurrentUser={this.updateCurrentUser} />
      </div>
    )
  }
}

export default MainPage
