export enum FilterActionTypes {
  SELECT_ALL = 'SELECT_ALL',
  SELECT_NO_TRANSFERS = 'SELECT_NO_TRANSFERS',
  SELECT_ONE_TRANSFER = 'SELECT_ONE_TRANSFER',
  SELECT_TWO_TRANSFERS = 'SELECT_TWO_TRANSFER',
  SELECT_THREE_TRANSFERS = 'SELECT_THREE_TRANSFER',
}

export interface FilterState {
  all: boolean;
  noTransfers: boolean;
  oneTransfer: boolean;
  twoTransfers: boolean;
  threeTransfers: boolean;
}

interface SelectAll {
  type: FilterActionTypes.SELECT_ALL;
}

interface SelectNoTransfers {
  type: FilterActionTypes.SELECT_NO_TRANSFERS;
}

interface SelectOneTransfer {
  type: FilterActionTypes.SELECT_ONE_TRANSFER;
}

interface SelectTwoTransfers {
  type: FilterActionTypes.SELECT_TWO_TRANSFERS;
}

interface SelectThreeTransfers {
  type: FilterActionTypes.SELECT_THREE_TRANSFERS;
}

export type FilterAction =
  | SelectAll
  | SelectNoTransfers
  | SelectOneTransfer
  | SelectTwoTransfers
  | SelectThreeTransfers;
