import { createSlice } from '@reduxjs/toolkit';

type Filter = {
  all: boolean;
  noTransfers: boolean;
  oneTransfer: boolean;
  twoTransfers: boolean;
  threeTransfers: boolean;
};

type FilterState = {
  filters: Filter;
};

const initialState: FilterState = {
  filters: {
    all: false,
    noTransfers: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setAll(state) {
      const all = !state.filters.all;
      state.filters = {
        all,
        noTransfers: all,
        oneTransfer: all,
        twoTransfers: all,
        threeTransfers: all,
      };
    },
    setNoTransfers(state) {
      state.filters = {
        ...state.filters,
        all:
          !state.filters.noTransfers &&
          state.filters.oneTransfer &&
          state.filters.twoTransfers &&
          state.filters.threeTransfers,
        noTransfers: !state.filters.noTransfers,
      };
    },
    setOneTransfer(state) {
      state.filters = {
        ...state.filters,
        all:
          state.filters.noTransfers &&
          !state.filters.oneTransfer &&
          state.filters.twoTransfers &&
          state.filters.threeTransfers,
        noTransfers: !state.filters.oneTransfer,
      };
    },
    setTwoTransfer(state) {
      state.filters = {
        ...state.filters,
        all:
          state.filters.noTransfers &&
          state.filters.oneTransfer &&
          !state.filters.twoTransfers &&
          state.filters.threeTransfers,
        noTransfers: !state.filters.twoTransfers,
      };
    },
    setThreeTransfer(state) {
      state.filters = {
        ...state.filters,
        all:
          state.filters.noTransfers &&
          state.filters.oneTransfer &&
          state.filters.twoTransfers &&
          !state.filters.threeTransfers,
        noTransfers: !state.filters.threeTransfers,
      };
    },
  },
});

export const { setAll, setNoTransfers, setOneTransfer, setThreeTransfer, setTwoTransfer } = filterSlice.actions;

export default filterSlice.reducer;
