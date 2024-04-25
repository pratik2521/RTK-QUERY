import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 1,
};
const incrementByAmount = createAction("account/incrementByAmount");
export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    incrementBonus: (state) => {
      state.points += 1; // immer libeary use
    },
    // decreament: (state) => {
    //   state.amount -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.points += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      if (action.payload >= 100) {
        state.points++;
      }
    });
  },
});

export const { incrementBonus } = bonusSlice.actions;
export default bonusSlice.reducer;
