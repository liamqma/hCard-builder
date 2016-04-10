import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import form from './form';

export default combineReducers({
  routing: routeReducer,
  form
});
