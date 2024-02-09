import { FilterAction, FilterActionTypes, FilterState } from '../../types/filter';

const initialState: FilterState = {
  all: false,
  noTransfers: false,
  oneTransfer: false,
  twoTransfers: false,
  threeTransfers: false,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const filterReducer = (state = initialState, action: FilterAction): FilterState => {
  switch (action.type) {
    case FilterActionTypes.SELECT_ALL:
      return {
        all: !state.all,
        noTransfers: !state.all,
        oneTransfer: !state.all,
        twoTransfers: !state.all,
        threeTransfers: !state.all,
      };
    case FilterActionTypes.SELECT_NO_TRANSFERS:
      return {
        ...state,
        all: state.noTransfers && state.oneTransfer && state.twoTransfers && state.threeTransfers,
        noTransfers: !state.noTransfers,
      };
    case FilterActionTypes.SELECT_ONE_TRANSFER:
      return {
        ...state,
        all: state.noTransfers && state.oneTransfer && state.twoTransfers && state.threeTransfers,
        oneTransfer: !state.oneTransfer,
      };
    case FilterActionTypes.SELECT_TWO_TRANSFERS:
      return {
        ...state,
        all: state.noTransfers && state.oneTransfer && state.twoTransfers && state.threeTransfers,
        twoTransfers: !state.twoTransfers,
      };
    case FilterActionTypes.SELECT_THREE_TRANSFERS:
      return {
        ...state,
        all: state.noTransfers && state.oneTransfer && state.twoTransfers && state.threeTransfers,
        threeTransfers: !state.threeTransfers,
      };
    default:
      return state;
  }
};
