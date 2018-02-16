import React from 'react'
import SelectedProfile from './SelectedProfile'
import UserList from './UserList'
import request from 'superagent'

class MainPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      people: [],
      currentUser: {},
      refresh: false
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this)
    this.getUserData = this.getUserData.bind(this)
    this.refreshView = this.refreshView.bind(this)
  }

  updateCurrentUser (passedPerson) {
    this.setState(
      {
        currentUser: passedPerson
      }
    )
  }

  refreshView () {
    this.getUserData()
  }

  getUserData () {
    request
      .get('http://localhost:3000/api/v1/feedme/getdata')
      .then(res => {
        this.setState({people: res.body.people, currentUser: res.body.people[0]})
      })
  }

  componentWillMount () {
    this.getUserData()
  }

  render () {
    return (
      <div>
        {this.state.people[0] ? <SelectedProfile user={this.state.currentUser} refreshMainPage={this.refreshView} /> : null}
        {this.state.people[0] ? <UserList userList={this.state.people} updateCurrentUser={this.updateCurrentUser} /> : null}
      </div>
    )
  }
}

export default MainPage
