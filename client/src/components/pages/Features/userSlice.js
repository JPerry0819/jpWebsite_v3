import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/user/';

const initialState = {
    user: [],
    isError: false,
    isSuccess: false,
    isLoading: false
};

//GET users
export const getUser = createAsyncThunk(
    'user/',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(API_URL)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('GET not working!')
        }
    }
);

export const userToVerify = createAsyncThunk(
    'user/verify-user',
    async (userData, thunkAPI) =>{
        try {
            const response = await axios.post(API_URL + "verify-user", userData)
            console.log(response.data)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Verify not working!')
        }
    }
)

//CREATE user

export const createUser = createAsyncThunk(
    'user/new-user',
    async (userData, thunkAPI) => {
        try{
            const response = await axios.post(API_URL + "new-user", userData);
            return response.data
        }catch(error){
            return thunkAPI.rejectWithValue('CREATE not working!')
        }
    }
);

//EDIT User/Update
//Need to check this! 

export const editUser = createAsyncThunk(
    'user/:id',
    async (userData, thunkAPI) =>{
        try{
            const response = await axios.put(API_URL + ":id" + userData._id, userData);
            return response.data
        }catch (error){
            return thunkAPI.rejectWithValue('EDIT/CREATE not working!')
        }
    }
);

//DELETE user

export const deleteUser = createAsyncThunk(
    'user/:id',
    async (id, thunkAPI) =>{
        try{
            const response = await axios.delete(API_URL + ":id" + id);
            getUser()
            return response.data
        }catch(error){
            return thunkAPI.rejectWithValue('DELETE is not working!')
        }
    }
);

//User slice 

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        reset: (state) => initialState,
    },

    extraReducers: (builder) =>{
        builder
        .addCase(createUser.pending, (state) =>{
            state.isLoading = true;
        })
        .addCase(createUser.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user =action.payload;
        })
        .addCase(createUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })
        .addCase(getUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(getUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })
        .addCase(userToVerify.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(userToVerify.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
        })
        .addCase(userToVerify.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        })
        .addCase(deleteUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            const index = state.user.findIndex((user) => user._id === action.payload._id)
            state.user.splice(index, 1)
        })
        .addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.user = action.payload;
        })
  
    },
});

export default userSlice.reducer;
export const {reset} = userSlice.actions