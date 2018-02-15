import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import SelectedProfile from './SelectedProfile'
import UserList from './UserList'

const App = () => (
  <Router>
    <div className='app'>
      <Route exact path='/' component={SelectedProfile} />
      <Route path='/:id' component={SelectedProfile} />
      {/* <SelectedProfile /> */}
      {/* <ErrorMessage /> */}
      <UserList />
    </div>
  </Router>
)

export default App
