import { configureStore } from '@reduxjs/toolkit';

import listsSlice from './lists-slice';
import listItemsSlice from './items-slice';

const store = configureStore({
  reducer: {
    lists: listsSlice.reducer,
    listItems: listItemsSlice.reducer,
  },
});

export default store;
