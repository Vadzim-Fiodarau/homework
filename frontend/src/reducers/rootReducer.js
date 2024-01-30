import { combineReducers } from 'redux';

import rhinoReducer from './rhinoReducer';

const rootReducer = combineReducers({
  rhinoceros: rhinoReducer,
});

export default rootReducer;
