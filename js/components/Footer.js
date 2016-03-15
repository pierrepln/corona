import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <hr/>
        <p><em>Footer</em></p>
      </div>
    );
  }
}

export default connect(state => state.Sample)(Footer)
