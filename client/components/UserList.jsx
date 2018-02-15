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
      <div className='peopleGallery'>
        {this.state.emptyObjects.map((content, id) => {
          return (
            <Link key={id} to={content.name} replace >
              <img className='profileImageGallery' src={`images/${content.name}.jpg`} />
              <h5>{content.name}</h5>
            </Link>
          )
        })}
      </div>
    )
  }
}

export default UserList
