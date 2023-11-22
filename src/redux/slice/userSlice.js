import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      token: '',
      user_id: '',
      user_display_name: '',
      user_email: '',
      avatar_url: '',
    },
  },
  reducers: {
    setUser: (state, actions) => {
      // console.log('action: ', actions.payload);
      state.user = {
        token: actions.payload.token,
        user_id: actions.payload.user_id,
        user_display_name: actions.payload.user_display_name,
        user_email: actions.payload.user_email,
        avatar_url: actions.payload.avatar_url,
      };
    },
  },
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
