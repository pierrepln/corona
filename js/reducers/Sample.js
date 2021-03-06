import * as ActionTypes from '../actions/index'

let defaultState = {
  title: 'Home'
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.TITLE_CHANGED:
      return {
        ...state,
        title: action.text
      };
    default:
      return state;
  }
}
