import { configureStore } from '@reduxjs/toolkit';

import listsSlice from './lists-slice';
import listItemsSlice from './items-slice';
import authSlice from './auth.slice';
import dataSlice from './forge-data-management-slice';

const store = configureStore({
  reducer: {
    lists: listsSlice.reducer,
    listItems: listItemsSlice.reducer,
    auth: authSlice.reducer,
    dataManagement: dataSlice.reducer,
  },
});

export default store;
