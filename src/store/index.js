import { configureStore } from '@reduxjs/toolkit';

import listsSlice from './lists-slice';

const store = configureStore({
  reducer: {
    lists: listsSlice.reducer,
  },
});

export default store;
