import React from 'react'
import { render } from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/index'

const store = configureStore({
  reducer: rootReducer
})

export default store
