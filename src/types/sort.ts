export interface SortState {
  cheapest: boolean;
  fastest: boolean;
  optimal: boolean;
}

export enum SortActionTypes {
  SET_CHEAPEST = 'SET_CHEAPEST',
  SET_FASTEST = 'SET_FASTEST',
  SET_OPTIMAL = 'SET_OPTIMAL',
}

interface SetCheapestSortAction {
  type: SortActionTypes.SET_CHEAPEST;
}

interface SetFastestSortAction {
  type: SortActionTypes.SET_FASTEST;
}

interface SetOptimalSortAction {
  type: SortActionTypes.SET_OPTIMAL;
}

export type SortAction = SetCheapestSortAction | SetFastestSortAction | SetOptimalSortAction;
