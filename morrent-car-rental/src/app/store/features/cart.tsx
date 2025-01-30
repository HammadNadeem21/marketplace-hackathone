import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../../../types/cars";
import { stat } from "fs";

// Define the initial state using that type
const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Add to cart functionality
    addToCart(state, action) {
      let uuid = Math.floor(1000 + Math.random() * 9000);
      let newObj = { ...action.payload, uuid };
      state.push(newObj);
    },

    // Delete from Cart
    deleteItem(state, {payload}){
      return state.filter( (val) => val.uuid !== payload)
    },

    // Addition of items
    addCart(state, action){
      let obj = state.find( (val) => val.uuid == action.payload.uuid);
      if(obj) {
        ++obj.quantity;
        let newState = state.filter( (val) => val._id !== obj?._id);
        state = [...newState, obj];
        return;
      }
    },

    // Subtraction of items
    subtractCart(state, action){
      let obj = state.find( (val) => val.uuid == action.payload.uuid);

      if(obj !== undefined){
        if(obj.quantity <= 1){
          return state.filter( (val) => val.uuid !== obj?.uuid)
        }
        --obj.quantity;
        let newState = state.filter( (val) => val.uuid == obj?.uuid);
        state = [...newState, obj];
        return;
      }
    }
  },
});

export const { addToCart, deleteItem, addCart, subtractCart } = cartSlice.actions;

export default cartSlice.reducer;
