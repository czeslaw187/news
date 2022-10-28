import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import getCurrency from '../pages/api/getCurrencyNews'

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        'news': [],
        'currencyNews': []
    },
    reducers: {
        getNews: (state, action) => {
            state.news = action.payload
        },
        getCurrency: (state, action) => {
            console.log(action.payload, 'payload')
            state.currencyNews = action.payload
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

export const fetchCurrencyNews = (currency) => async dispatch => {
    try {
        await axios.post(process.env.NEXT_PUBLIC_URL + '/api/getCurrencyNews', {currency: currency}).then((response)=>{console.log(response.data.articles, 'action'); dispatch(getCurrency(action.payload=response.data.articles))})
    } catch (error) {
        return console.log(error.message)
    }
}