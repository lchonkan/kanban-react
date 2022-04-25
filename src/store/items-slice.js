import { createSlice } from '@reduxjs/toolkit';

const listItemsSlice = createSlice({
  name: 'listItems',
  initialState: {
    listItems: [
      { listId: 'l01', id: 'i01', title: 'Item 1', description: 'Description 1' },
      { listId: 'l01', id: 'i02', title: 'Item 2', description: 'Description 2' },
      { listId: 'l01', id: 'i03', title: 'Item 3', description: 'this is the end of it' },
      { listId: 'l02', id: 'i04', title: 'Item 1', description: 'Description 1' },
      { listId: 'l02', id: 'i05', title: 'Item 2', description: 'Description 2' },
      { listId: 'l02', id: 'i06', title: 'Item 3', description: 'this is the end of it' },
      { listId: 'l03', id: 'i07', title: 'Item 1', description: 'Description 1' },
      { listId: 'l03', id: 'i08', title: 'Item 2', description: 'Description 2' },
      { listId: 'l03', id: 'i09', title: 'Item 3', description: 'this is the end of it oh yeah' },
    ],
  },
  reducers: {
    createListItem(state, action) {
      //code for adding a list item
      const newItem = action.payload;
      state.listItems.push(newItem);
    },
    moveListItem(state, action) {
      //code for moving items
    },
  },
});

export const listItemActions = listItemsSlice.actions;
export default listItemsSlice;
