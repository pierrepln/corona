import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import styles from '../../css/app.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';


class Home extends Component {
  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, dispatch);
    return (
      <div>
      <Header />
      <Content />
      <Footer />
      </div>
    );
  }
}

export default connect(state => state.Sample)(Home)
