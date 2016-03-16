import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';

const api_token = '2.00RfbN6G0tfoC4641e5ead68Q22LYE';

class Content extends Component {
  getInitialState() {
    return { articles: '' };
  }

  componentDidMount() {
    this.serverRequest = $.ajax({
      type: 'GET',
      url: "https://api.weibo.com/2/statuses/friends_timeline.json?access_token=" + api_token,
      dataType: 'jsonp',
      success: function(result) {

        result.data.statuses.forEach (
          (item) => {
            console.log(item);
          }
        );
        this.setState({
          articles: result.data.statuses
        });
      }
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <div>
      Timeline
      </div>
    );
  }
}

export default connect(state => state.Sample)(Content)
