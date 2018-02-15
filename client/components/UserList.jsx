import React from 'react'
import { Link } from 'react-router-dom'

class UserList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      emptyObjects: [{ name: 'Ethan' }, { name: 'Peter' }, { name: 'Stina' }, { name: 'Steve' }]
    }
  }

  render () {
    return (
      <div>
        {this.state.emptyObjects.map((content, id) => {
          return <Link key={id} to={content.name}>
            <img src="http://geniussys.com/img/placeholder/blogpost-placeholder-100x100.png" />
          </Link>
        })}
      </div>
    )

  }

}

export default UserList
