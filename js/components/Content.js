import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';

// Auth
// https://api.weibo.com/oauth2/authorize?
// client_id=1506733780&redirect_uri=http://ntie.fr&response_type=code
//
// Access Token
// https://api.weibo.com/oauth2/access_token?
// client_id=1506733780&client_secret=29fb29ba759b352b1821f40adb1d2245&grant_type=authorization_code&code=1d4487164859dc4a24144d6b21a0be0b&redirect_uri=http://ntie.fr
//
// Timeline
// https://api.weibo.com/2/statuses/user_timeline.json?
// access_token=2.00RfbN6GkRGydB7b89592dd7nKSMCB

const client_id = '340527181';
const redirect_uri = 'http://ntie.fr/';
const response_type = 'code';

const client_secret = '2b56355b4e70f775f41baaeffb2a14d2';
const grant_type = 'authorization_code';

let g_code = '74d115cd2f0d9ce269091121b569dfd5';
let g_token = '2.00RfbN6G0tfoC4641e5ead68Q22LYE';


//
//
// // Auth
// //
// var Auth = React.createClass({
//   getInitialState: function() {
//     return {
//       access_token: ''
//     };
//   },
//
//   componentDidMount: function() {
//     this.serverRequest = $.get(
//       "https://api.weibo.com/oauth2/authorize", {
//         client_id: "340527181",
//         client_secret: "2b56355b4e70f775f41baaeffb2a14d2",
//         grant_type: "authorization_code",
//         code: "74d115cd2f0d9ce269091121b569dfd5",
//         redirect_uri: "http://ntie.fr"
//       },
//       function (result) {
//         var response = result[0];
//
//         console.log(response);
//
//         this.setState({
//           access_token: response.access_token
//         });
//
//         g_token = response.access_token;
//         console.log('token: ' + g_token);
//
//       }.bind(this)
//     );
//   },
//
//   componentWillUnmount: function() {
//     this.serverRequest.abort();
//   },
//
//   render: function() {
//     return (
//       <div>
//       Auth
//       {g_token}
//
//       </div>
//     );
//   }
// });
//
//
//
// // ACCESS TOKEN
// //
// var AccessToken = React.createClass({
//   getInitialState: function() {
//     return {
//
//     };
//   },
//
//   componentDidMount: function() {
//     this.serverRequest = $.get(
//       "https://api.weibo.com/oauth2/access_token?", { client_id: "340527181", redirect_uri: "http://ntie.fr/", response_type: "code" },
//       function (result) {
//         var response = result[0];
//
//         console.log(response);
//
//         this.setState({
//         });
//
//
//       }.bind(this)
//     );
//   },
//
//   componentWillUnmount: function() {
//     this.serverRequest.abort();
//   },
//
//   render: function() {
//     return (
//       <div>
//       Access Token
//
//       </div>
//     );
//   }
// });



// TIMELINE
//
var Timeline = React.createClass({
  getInitialState: function() {
    return {

    };
  },

  componentDidMount: function() {
    this.serverRequest = $.ajax({
      type: 'GET',
      url: "https://api.weibo.com/2/statuses/user_timeline.json?access_token=2.00RfbN6G0tfoC4641e5ead68Q22LYE",
      //  contentType: 'text/plain',
      xhrFields: {
        // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
        // This can be used to set the 'withCredentials' property.
        // Set the value to 'true' if you'd like to pass cookies to the server.
        // If this is enabled, your server must respond with the header 'Access-Control-Allow-Credentials: true'.
        // withCredentials: false
      },
      headers: {
        // Set any custom headers here.
        // If you set any non-simple headers, your server must include these
        // headers in the 'Access-Control-Allow-Headers' response header.
        Access-Control-Allow-Origin: true
      },
      success: function(result) {
        // Here's where you handle a successful response.
        var response = result[0];

        console.log('response: ' + response);

        this.setState({
        });

      }
    });
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div>
      Timeline
      </div>
    );
  }
});



class Content extends Component {
  render() {
    return (
      <div>
      <Timeline />
      </div>
    );
  }
}

export default connect(state => state.Sample)(Content)
