import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'dataManagement',
  initialState: {
    hubs: [],
    projets: [],
    folders: [],
    files: [],
    versions: [],
  },
  reducers: {
    setHubs(state, action) {
      console.log('Setting hubs in store');
      const hubs = action.payload;
      state.hubs = hubs;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
