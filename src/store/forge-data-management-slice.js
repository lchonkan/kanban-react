import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'dataManagement',
  initialState: {
    hubs: [],
    projects: [],
    topFolders: [],
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
    addFolder(state, action) {
      const folder = action.payload;
      const existingFolder = state.folders.find((thisFolder) => thisFolder.id === folder.id);
      if (existingFolder) {
        return;
      } else {
        state.folders.push(folder);
      }
      console.log('Adding Folder to store');
    },
    addTopFolder(state, action) {
      const folder = action.payload;
      const existingFolder = state.topFolders.find((thisFolder) => thisFolder.id === folder.id);
      if (existingFolder) {
        return;
      } else {
        state.topFolders.push(folder);
      }
      console.log('Adding Folder to store');
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
