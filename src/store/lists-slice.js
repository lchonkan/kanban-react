import { createSlice } from '@reduxjs/toolkit';

const listsSlice = createSlice({
  name: 'lists',
  initialState: {
    items: [
      {
        id: 'L01',
        boardId: 'b01',
        title: 'backlog',
      },
      {
        id: 'L02',
        boardId: 'b01',
        title: 'backlog',
      },
      {
        id: 'L03',
        boardId: 'b01',
        title: 'backlog',
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
