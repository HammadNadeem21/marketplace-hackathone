import { createSlice } from '@reduxjs/toolkit'
import { Cars } from '../../../../types/cars'




// Define the initial state using that type
const initialState: Cars[] = []

export const carSlice = createSlice({
  name: 'car',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
})

export const { } = carSlice.actions



export default carSlice.reducer