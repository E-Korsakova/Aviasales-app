import { FilterAction, FilterActionTypes } from '../../types/filter';

export const filterAll = (): FilterAction => {
  return { type: FilterActionTypes.SELECT_ALL };
};

export const filterNoTransfers = (): FilterAction => {
  return { type: FilterActionTypes.SELECT_NO_TRANSFERS };
};

export const filterOneTransfer = (): FilterAction => {
  return { type: FilterActionTypes.SELECT_ONE_TRANSFER };
};

export const filterTwoTransfers = (): FilterAction => {
  return { type: FilterActionTypes.SELECT_TWO_TRANSFERS };
};

export const filterThreeTransfers = (): FilterAction => {
  return { type: FilterActionTypes.SELECT_THREE_TRANSFERS };
};
