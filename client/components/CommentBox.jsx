import React from 'react'
import request from 'superagent'

class CommentBox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newComment: '',
      emoji: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit () {
    request.post('/api/v1/feedme/addcomment')
      .send({
        id: this.props.user.id,
        comment: this.state.newComment,
        emoji: this.state.emoji
      })
      .then(res => {
        this.props.refreshMainPage()
      })
  }

  render () {
    return (
      <div className='app'>
        {/* <form> */}
        <input onChange={(e) => this.onChange(e)} name='newComment' placeholder='Enter your feedback here'></input>
        <button onClick={this.onSubmit} type='button'>Leave Feedback</button>
        {/* </form> */}
      </div>
    )
  }
}

export default CommentBox
