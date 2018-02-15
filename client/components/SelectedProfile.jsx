import React from 'react'

class SelectedProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: { name: 'Ethan', comments: ['Test comment', 'Hello', 'Another Comment'] }
    }
  }

  componentDidMount () {
    // console.log(this.props.name)
    // if (this.props.match.params.id) {
    //   this.setState({currentUser: {
    //     name: this.props.match.params.id,
    //     comments: ['Test comment', 'Hello', 'Another Comment']
    //   }})
    // }

  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps)
    if (nextProps.match.params.id) {
      this.setState(
        {
          currentUser: {
            name: this.props.match.params.id,
            comments: ['Test 22222', 'Hello', 'Another Comment']
          }
        }
      )
    }
    
  }

  render() {
    return (
      <div id='selectedUser'>
        <img src='http://geniussys.com/img/placeholder/blogpost-placeholder-100x100.png' id='mainProfile'></img>
        <h2>{this.state.currentUser.name}</h2>
        <ul>
          {this.state.currentUser.comments.map((user, id) => {
            return <li key={id} className="commentList">{user}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default SelectedProfile
