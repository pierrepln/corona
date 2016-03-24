import React, { PropTypes, Component } from 'react'
import styles from '../../css/app.css'


export default class Posts extends Component {
  constructor(props) {
    super(props)
  }


  renderPost({ created_at, pic_urls, source, text, user }) {
    const link = source.match(/href="([^"]*")/g)

    return (
      <div>
        <li>
          {created_at} <br/>
          by {user.name} <br/>
          <a href={link} /> <br/>
          {text} <br/>
          <ul>
            {pic_urls.map((pic, i) => <li><img src={pic. thumbnail_pic} width="165" height="165" /></li>)}
          </ul>
          <hr/>
        </li>
      </div>
    )
  }

  render() {
    const posts = this.props.posts.data.statuses

    console.log(posts)

    return <ul> {posts.map(this.renderPost)} </ul>
  }

}
