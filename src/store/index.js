import { configureStore } from '@reduxjs/toolkit';

import listsSlice from './lists-slice';
import listItemsSlice from './items-slice';
import authSlice from './auth.slice';

const store = configureStore({
  reducer: {
    lists: listsSlice.reducer,
    listItems: listItemsSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
