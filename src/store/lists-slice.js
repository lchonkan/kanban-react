import { createSlice } from '@reduxjs/toolkit';

const listsSlice = createSlice({
  name: 'lists',
  initialState: {
    items: [
      {
        id: 'l01',
        boardId: 'b01',
        title: 'backlog',
      },
      {
        id: 'l02',
        boardId: 'b01',
        title: 'sprint',
      },
      {
        id: 'l03',
        boardId: 'b01',
        title: 'doing',
      },
    ],
  },
  reducers: {
    addList(state, action) {
      const newList = action.payload;
      state.items.push(newList);
    },
    removeList(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      //   state.totalQuantity--;
      //   state.changed = true;
      if (existingItem) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        return;
      }
    },
  },
});
export const listActions = listsSlice.actions;
export default listsSlice;
