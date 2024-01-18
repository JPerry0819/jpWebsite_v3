import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/nextchat'

const initialState = {
    chat: [],
    isCError: false,
    isSuccess: false,
    isLoading: false
};

export const getChat = createAsyncThunk(
    'nextchat',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(API_URL )
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('GET not working - message')
        }
    }
);

export const chatToAdd = createAsyncThunk(
    'add-chat/:id',
    async (sentToRedux, thunkAPI) => {
        try {
            const response = await axios.put(API_URL + "/add-chat/" + sentToRedux.id, {
                ChatSection: sentToRedux.ChatsToAdd
            });
            getChat()
            return response.data
            // console.log(response.data)
        } catch (error) {
            return thunkAPI.rejectWithValue('chat PUT not working!')
        }
    }
)

export const createChat = createAsyncThunk(
    'nextchat/new-chat',
    async (chatData, thunkAPI) => {
        try {
            const response = await axios.post(API_URL + "/new-chat", chatData);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('CREATE not working - chat')
        }
    }
);
export const editChat = createAsyncThunk(
    'nextchat/:id',
    async (chatData, thunkAPI) => {
        try {
            const response = await axios.put(API_URL + "/:id" + chatData._id, chatData);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('EDIT/UPDATE not working - post');
        }
    }
);

export const deleteChat = createAsyncThunk(
    'nextchat/delete',

    async (id, thunkAPI) => {

        try {
            const response = await axios.delete(API_URL + "/delete-chat/" + id);
            getChat()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('DELETE is not working - post')
        }
    }
);

export const chatSlice = createSlice({
    name: 'nextchat',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createChat.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createChat.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.chat.push(action.payload);
            })
            .addCase(createChat.rejected, (state, action) => {
                state.isLoading = false;
                state.isCError = true;
            })
            .addCase(getChat.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getChat.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.chat = action.payload;
            })
            .addCase(getChat.rejected, (state, action) => {
                state.isLoading = false;
                state.isCError = true;
            })
            .addCase(chatToAdd.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(chatToAdd.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.chat.findIndex((chat) => chat._id === action.payload._id)
                state.chat.splice(index, 1, action.payload)
            })
            .addCase(chatToAdd.rejected, (state, action) => {
                state.isLoading = false;
                state.isCError = true;
            })


    },

});

export default chatSlice.reducer;
export const { reset } = chatSlice.actions

