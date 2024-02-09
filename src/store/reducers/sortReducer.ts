/* eslint-disable @typescript-eslint/default-param-last */
import { SortAction, SortActionTypes, SortState } from '../../types/sort';

const initialState: SortState = {
  cheapest: true,
  fastest: false,
  optimal: false,
};

export const sortReducer = (state = initialState, action: SortAction): SortState => {
  console.log(action);
  switch (action.type) {
    case SortActionTypes.SET_CHEAPEST:
      return {
        cheapest: true,
        fastest: false,
        optimal: false,
      };

    case SortActionTypes.SET_FASTEST:
      return {
        cheapest: false,
        fastest: true,
        optimal: false,
      };
    case SortActionTypes.SET_OPTIMAL:
      return {
        cheapest: false,
        fastest: false,
        optimal: true,
      };
    default:
      return state;
  }
};
