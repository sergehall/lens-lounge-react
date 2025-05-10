import { combineReducers } from '@reduxjs/toolkit';

import profileReducer from './profile/profileSlice';
import myBlogsReducer from './user-blogs/userBlogsSlice';

// Create showcasePageReducer by combining small reducers
const showcasePageReducer = combineReducers({
  profile: profileReducer,
  categoryBlogs: myBlogsReducer,
});

export default showcasePageReducer;
