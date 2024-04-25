import { createReducer, createAction } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  points: 15,
};

// Define actions using createAction
export const increment = createAction("reward/increment");
export const incrementByAmount = createAction("reward/incrementByAmount");

// Create reducer using createReducer
const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points++; // Increment points by 1
    })
    .addCase(incrementByAmount, (state, action) => {
      state.points += action.payload; // Increment points by payload
    });
});

export default rewardReducer;
