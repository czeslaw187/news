import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        'news': []
    },
    reducers: {
        getNews: (state, action) => {
            state.news = action.payload
        }
    }
})

export default newsSlice.reducer

const {getNews} = newsSlice.actions

export const fetchNews = () => async dispatch => {
    try {
        await axios.get(process.env.NEXT_PUBLIC_URL + '/api/getNews').then((response)=>{dispatch(getNews(response.data))})
    } catch (error) {
        return console.log(error.message)
    }
}