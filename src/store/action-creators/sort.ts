// import { Dispatch } from 'redux';

import { SortAction, SortActionTypes } from '../../types/sort';

export const sortCheapest = (): SortAction => {
  return { type: SortActionTypes.SET_CHEAPEST };
};

export const sortFastest = (): SortAction => {
  return { type: SortActionTypes.SET_FASTEST };
};

export const sortOptimal = (): SortAction => {
  return { type: SortActionTypes.SET_OPTIMAL };
};
