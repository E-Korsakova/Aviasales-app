import { Action, PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type Segments = {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
};

type TicketType = {
  price: number;
  carrier: string;
  segments: Segments[];
};

type SearchId = {
  searchId: string;
};

type Filter = {
  all: boolean;
  noTransfers: boolean;
  oneTransfer: boolean;
  twoTransfers: boolean;
  threeTransfers: boolean;
};

type FetchState = {
  tickets: TicketType[];
  filteredTickets: TicketType[];
  isShowMore: boolean;
  showMoreCount: number;
  stop: boolean;
  searchId: string;
  loading: boolean;
  error: string | null;
  sort: string;
  filters: Filter;
};

export const searchId = createAsyncThunk<SearchId, undefined, { rejectValue: string }>(
  'fetch/searchId',
  async function (_, { rejectWithValue }) {
    const response = await fetch('https://aviasales-test-api.kata.academy/search');
    if (!response.ok) {
      return rejectWithValue('Server Error!');
    }
    const data = await response.json();
    return data;
  }
);

const initialState: FetchState = {
  tickets: [],
  filteredTickets: [],
  loading: false,
  error: null,
  sort: '',
  searchId: '',
  isShowMore: false,
  showMoreCount: 5,
  stop: false,
  filters: {
    all: false,
    noTransfers: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
};

export const fetchTickets = createAsyncThunk<{ tickets: TicketType[]; stop: boolean }, string, { rejectValue: string }>(
  'fetch/fetchTickets',
  async function (id, { rejectWithValue }) {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
    if (!response.ok) return rejectWithValue('Server Error!');
    const data = await response.json();
    return data;
  }
);

export const getFilteredTickets = createAsyncThunk<TicketType[], { tickets: TicketType[]; filters: Filter }>(
  'fetch/getFilteredTickets',
  async function ({ tickets, filters }) {
    const filteredTickets: TicketType[] = [];

    if (filters.noTransfers) {
      filteredTickets.push(
        ...tickets.filter((ticket) => Math.max(ticket.segments[0].stops.length, ticket.segments[1].stops.length) === 0)
      );
    }
    if (filters.oneTransfer) {
      filteredTickets.push(
        ...tickets.filter((ticket) => Math.max(ticket.segments[0].stops.length, ticket.segments[1].stops.length) === 1)
      );
    }
    if (filters.twoTransfers) {
      filteredTickets.push(
        ...tickets.filter((ticket) => Math.max(ticket.segments[0].stops.length, ticket.segments[1].stops.length) === 2)
      );
    }
    if (filters.threeTransfers) {
      filteredTickets.push(
        ...tickets.filter((ticket) => Math.max(ticket.segments[0].stops.length, ticket.segments[1].stops.length) === 3)
      );
    }
    return filteredTickets;
  }
);

function isError(action: Action) {
  return action.type.endsWith('rejected');
}

export const fetchSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {
    showMore(state) {
      if (!state.isShowMore) {
        state.isShowMore = true;
        state.showMoreCount += 5;
      }
    },
    setIsChecked(state, action) {
      state.filteredTickets = [];
      if (state.isShowMore) {
        state.isShowMore = false;
        state.showMoreCount = 5;
      }
      if (action.payload === 'all') {
        const all = !state.filters.all;
        state.filters = {
          all,
          noTransfers: all,
          oneTransfer: all,
          twoTransfers: all,
          threeTransfers: all,
        };
      }
      if (action.payload === 'noTransfers') {
        state.filters = {
          ...state.filters,
          all:
            !state.filters.noTransfers &&
            state.filters.oneTransfer &&
            state.filters.twoTransfers &&
            state.filters.threeTransfers,
          noTransfers: !state.filters.noTransfers,
        };
      }
      if (action.payload === 'oneTransfer') {
        state.filters = {
          ...state.filters,
          all:
            state.filters.noTransfers &&
            !state.filters.oneTransfer &&
            state.filters.twoTransfers &&
            state.filters.threeTransfers,
          oneTransfer: !state.filters.oneTransfer,
        };
      }
      if (action.payload === 'twoTransfers') {
        state.filters = {
          ...state.filters,
          all:
            state.filters.noTransfers &&
            state.filters.oneTransfer &&
            !state.filters.twoTransfers &&
            state.filters.threeTransfers,
          twoTransfers: !state.filters.twoTransfers,
        };
      }
      if (action.payload === 'threeTransfers') {
        state.filters = {
          ...state.filters,
          all:
            state.filters.noTransfers &&
            state.filters.oneTransfer &&
            state.filters.twoTransfers &&
            !state.filters.threeTransfers,
          threeTransfers: !state.filters.threeTransfers,
        };
      }
    },
    setSort(state, action) {
      if (state.isShowMore) {
        state.isShowMore = false;
        state.showMoreCount = 5;
      }
      state.loading = true;
      if (action.payload === 'cheapest') {
        state.sort = 'cheapest';
        state.filteredTickets.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (action.payload === 'fastest') {
        state.sort = 'fastest';
        state.filteredTickets.sort((a, b) => {
          const timeA = a.segments[0].duration + a.segments[1].duration;
          const timeB = b.segments[0].duration + b.segments[1].duration;
          return timeA - timeB;
        });
      }
      if (action.payload === 'optimal') {
        state.sort = 'optimal';
        state.filteredTickets.sort((a, b) => {
          const timeA = a.segments[0].duration + a.segments[1].duration;
          const timeB = b.segments[0].duration + b.segments[1].duration;
          return a.price - b.price || timeA - timeB;
        });
      }
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchId.fulfilled, (state, action) => {
        state.loading = false;
        state.searchId = action.payload.searchId;
      })
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.stop = action.payload.stop;
        state.tickets.push(...action.payload.tickets);
      })
      .addCase(getFilteredTickets.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFilteredTickets.fulfilled, (state, action) => {
        if (
          state.filters.noTransfers ||
          state.filters.oneTransfer ||
          state.filters.twoTransfers ||
          state.filters.threeTransfers
        )
          state.filteredTickets.push(...action.payload);
        if (state.stop) state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setIsChecked, setSort, showMore } = fetchSlice.actions;

export default fetchSlice.reducer;
