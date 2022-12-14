import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        'news': [],
        'currencyNews': [],
        'currencyActive': "",
        'pageActive': "",
        'scratcherNews': []
    },
    reducers: {
        getNews: (state, action) => {
            state.news = action.payload
        },
        getCurrency: (state, action) => {
            state.currencyNews = action.payload
        },
        activeCurrency: (state, action) => {
            state.currencyActive = action.payload
        }, 
        activePage: (state, action) => {
            state.pageActive = action.payload
        },
        scratcher: (state, action) => {
            state.scratcherNews = action.payload
        }
    }
})

export default newsSlice.reducer

export const {getNews, getCurrency, activeCurrency, activePage, scratcher} = newsSlice.actions

export const fetchNews = () => async dispatch => {
    try {
        await axios.get(process.env.NEXT_PUBLIC_URL + '/api/getNews').then((response)=>{dispatch(getNews(response.data))})
    } catch (error) {
        return console.log(error.message)
    }
}

export const fetchCurrencyNews = (currency) => async dispatch => {
    try {
        await axios.post(process.env.NEXT_PUBLIC_URL + '/api/getCurrencyNews', {currency: currency}).then((response)=>{dispatch(getCurrency(response.data.articles))})
    } catch (error) {
        return console.log(error.message)
    }
}

export const fetchScratcherNews = (currency) => async dispatch => {
    try {
        await axios.post(process.env.NEXT_PUBLIC_URL + '/api/getScratcherNews',{currency: currency}).then((response)=>{dispatch(scratcher(response.data))})
    } catch (error) {
        return console.log(error.message)
    }
}