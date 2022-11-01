import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const register = createAsyncThunk('auth/registr', async user => {
    try {
        const { data } = await axios.post('/users/signup', user);
        return data;
    }
    catch (error) {
        console.log(error);
    }
});

const authOperetions = { register };


export default authOperetions;
