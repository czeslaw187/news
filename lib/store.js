import { configureStore } from '@reduxjs/toolkit'
import newsReducer from '../lib/newsSlice.js'
import { createWrapper } from 'next-redux-wrapper'

export const store = () => configureStore({
    reducer: {
        news: newsReducer
    }
})

export const wrapper = createWrapper(store)