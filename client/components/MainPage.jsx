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

  refreshView (person) {
    this.getUserData(person)
  }

  getUserData (person) {
    request
      .get('http://localhost:3000/api/v1/feedme/getdata')
      .then(res => {
        let newCurrentUser
        if (person) {
          newCurrentUser = res.body.people.find((item) => {
            return item.id === person.id
          })
        } else {
          newCurrentUser = res.body.people[0]
        }
        this.setState({ people: res.body.people,
          currentUser: newCurrentUser })
      })
  }

  componentWillMount () {
    this.getUserData()
  }

  render () {
    return (
      <div>
        <div className='header'>
          <img src='images/feed me.png' width='400' height='400' />

          <div className='title'>
            <p>Welcome to Feed Me! A space where you can anonymously give other members of your cohort feedback.</p>
          </div>

          <div className='col'>
            {this.state.people[0] ? <SelectedProfile user={this.state.currentUser} refreshMainPage={this.refreshView} /> : null}
          </div>

        </div>
        <div className='container'>
          <div className='col'>
            {this.state.people[0] ? <UserList userList={this.state.people} updateCurrentUser={this.updateCurrentUser} /> : null}
          </div>

        </div>
      </div>

    )
  }
}

export default MainPage
