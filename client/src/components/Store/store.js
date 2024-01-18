import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../pages/Features/userSlice';
import postReducer from '../pages/Features/postingSlice';
import chatReducer from '../pages/Features/newChatSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer,
        chat: chatReducer,
      
    }
});
