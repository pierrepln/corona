import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';

class Header extends Component {
  render() {
    return (
      <div>
        <h1 className={styles.text} > Welcome on Corona&#39;s Blog</h1>
        <hr/>
      </div>
    );
  }
}

export default connect(state => state.Sample)(Header)
