import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authorization',
  initialState: {
    isLoggedIn: false,
    credentials: {
      access_token: null,
      expires_in: null,
      refresh_token: null,
      token_type: null,
    },
  },

  reducers: {
    setCredentials(state, action) {
      const { access_token, expires_in, refresh_token, token_type } = action.payload;
      state.credentials = {
        access_token,
        expires_in,
        refresh_token,
        token_type,
      };
    },
    login(state, action) {
      state.isLoggedIn = true;
      return;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
