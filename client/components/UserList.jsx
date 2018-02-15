import React from 'react'

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
        {this.props.userList.map((content, id) => {
          return (
            <div key={id} onClick={() => this.props.updateCurrentUser(content)}>
              <img className='profileImageGallery' src={`images/${content.name}.jpg`} />
              <h5 >{content.name}</h5>
            </div>
          )
        })}
      </div>
    )
  }
}

export default UserList
