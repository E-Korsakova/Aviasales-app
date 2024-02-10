import { Action, PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type Segments = {
  from: string;
  to: string;
  date: string;
  stops: string[];
  duration: number;
};

type Ticket = {
  price: number;
  carrier: string;
  segments: Segments[];
};

type SearchId = {
  searchId: string;
};

type FetchState = {
  tickets: Ticket[];
  stop: boolean;
  searchId: string;
  loading: boolean;
  error: string | null;
  sort: string;
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
  loading: false,
  error: null,
  sort: '',
  searchId: '',
  stop: false,
};

export const fetchTickets = createAsyncThunk<
  { tickets: Ticket[]; stop: boolean },
  string,
  { rejectValue: string; state: { fetch: FetchState } }
>('fetch/fetchTickets', async function (id, { rejectWithValue }) {
  const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
  if (!response.ok) return rejectWithValue('Server Error!');
  const data = await response.json();
  return data;
});

function isError(action: Action) {
  return action.type.endsWith('rejected');
}

export const fetchSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {
    cheapest: (state) => {
      if (state.sort !== 'cheapest') {
        state.sort = 'cheapest';
        state.loading = true;
        state.tickets.sort((a, b) => {
          return a.price - b.price;
        });
        state.loading = false;
      }
    },
    fastest: (state) => {
      if (state.sort !== 'fastest') {
        state.sort = 'fastest';
        state.loading = true;
        state.tickets.sort((a, b) => {
          return a.price - b.price;
        });
        state.loading = false;
      }
    },
    optimal: (state) => {
      if (state.sort !== 'optimal') {
        state.sort = 'optimal';
        state.loading = true;
        state.tickets.sort((a, b) => {
          return a.price - b.price;
        });
        state.loading = false;
      }
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
        console.log(state.searchId);
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.stop = action.payload.stop;
        state.tickets.push(...action.payload.tickets);
        console.log(action.payload);
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { cheapest, fastest, optimal } = fetchSlice.actions;

export default fetchSlice.reducer;
