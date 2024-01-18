import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/message'

const initialState = {
    post: [],
    isError: false,
    isSuccess: false,
    isLoading: false
};


//GET postings

export const getPost = createAsyncThunk(
    'message',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(API_URL )
             console.log(getPost)
             console.log(response.data)
            return response.data
           
        } catch (error) {
            return thunkAPI.rejectWithValue('GET not working - message')
        }
       
    } 
    
);

// Comment stuff 

export const commentToAdd = createAsyncThunk(
    'add-comment/:id',
    async (sentToRedux, thunkAPI) => {
        try {
            const response = await axios.put(API_URL + "/add-comment/" + sentToRedux.id, {
                commentSection: sentToRedux.commentsToAdd
            });
            getPost()
            return response.data
            // console.log(response.data)
        } catch (error) {
            return thunkAPI.rejectWithValue('Comment PUT not working!')
        }
    }
)

//CREATE postings 

export const createPost = createAsyncThunk(
    'message/new-post',
    async (postData, thunkAPI) => {
        try {
            const response = await axios.post(API_URL + "/new-post", postData);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('CREATE not working - post')
        }
    }
);

//EDIT/UPDATE

export const editPost = createAsyncThunk(
    'message/:id',
    async (postData, thunkAPI) => {
        try {
            const response = await axios.put(API_URL + "/:id" + postData._id, postData);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('EDIT/UPDATE not working - post');
        }
    }
);

// DELETE post

export const deletePost = createAsyncThunk(
    'message/delete',

    async (id, thunkAPI) => {

        try {
            const response = await axios.delete(API_URL + "/delete-message/" + id);
            getPost()
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('DELETE is not working - post')
        }
    }
);

//Post Slice 

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.post.push(action.payload);
            })
            .addCase(createPost.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(getPost.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.post = action.payload;
            })
            .addCase(getPost.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(commentToAdd.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(commentToAdd.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const index = state.post.findIndex((post) => post._id === action.payload._id)
                state.post.splice(index, 1, action.payload)
            })
            .addCase(commentToAdd.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
            })


    },

});

export default messageSlice.reducer;
export const { reset } = messageSlice.actions

