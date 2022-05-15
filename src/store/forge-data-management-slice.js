import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'dataManagement',
  initialState: {
    hubs: [],
    projects: [],
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
    addProject(state, action) {
      const project = action.payload;
      // const hubIndex = state.hubs.find((hub) => hub.id === project.hubId);
      const existingProject = state.projects.find((prj) => prj.id === project.id);
      if (existingProject) {
        return;
      } else {
        state.projects.push(project);
      }

      console.log('Adding projects to the store...', action.payload);
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
