import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from '../../css/app.css'
import Posts from '../components/Posts'


const api_token = '2.00RfbN6G0tfoC4641e5ead68Q22LYE'

class PostListContainer extends Component {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: "https://api.weibo.com/2/statuses/friends_timeline.json?access_token=" + api_token,
      dataType: 'jsonp',
      success: function(posts) {
        this.setState({posts: posts})
      }.bind(this)
    });
  }

  render() {
    return <Posts posts={this.state.posts} />
  }


}

export default connect(state => state.Sample)(PostListContainer)
