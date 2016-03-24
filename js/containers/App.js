import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import PostListContainer from './PostListContainer'
import { renderDevTools } from '../utils/devTools'

const store = configureStore()

export default React.createClass({
  render() {
    return (
      <div>
        <PostListContainer />
        {/* only renders when running in DEV mode */
          renderDevTools(store)
        }
      </div>
    );
  }
});
