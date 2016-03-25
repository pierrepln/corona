import React, { PropTypes, Component } from 'react'
import styles from '../../css/app.css'


export default class Posts extends Component {
  constructor(props) {
    super(props)
  }


  renderPost({ created_at, pic_urls, source, text, user }) {
    const regex = source.match(/<(.*?)>(.*?)<(.*?)>/g)

    console.log(source)
    console.log(regex)

    return (
      <div>
        <li>
          {created_at} <br/>
          by {user.name} <br/>
          <a href={regex} rel="nofollow" >{regex}</a> <br/>
          {text} <br/>
          <ul>
            {pic_urls.map((pic, i) => <li><img src={pic.thumbnail_pic} width="165" height="165" /></li>)}
          </ul>
          <hr/>
        </li>
      </div>
    )
  }

  render() {
    const posts = this.props.posts.data.statuses

    console.log(posts)
    posts ? (return <ul> {posts.map(this.renderPost)} </ul>)
  }

}
