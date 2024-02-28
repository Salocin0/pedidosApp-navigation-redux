import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import carritoReducer from '../features/carrito/carritoSlice'



export default configureStore({
  reducer: {
    counter: counterReducer,
    carrito: carritoReducer,
  }
})