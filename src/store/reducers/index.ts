import { combineReducers } from 'redux';

import { sortReducer } from './sortReducer';
import { filterReducer } from './filterReduser';

export const rootReducer = combineReducers({
  filter: filterReducer,
  sort: sortReducer,
});
