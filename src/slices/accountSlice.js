import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useDispatch } from "react-redux";
const dispatch = useDispatch;

const initialState = {
  amount: 1,
};

export const getUserAccount = createAsyncThunk(
  "users/getUser",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:9000/account/${userId}`
      );
      console.log(response);
      return response.data.amount;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }
);
export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1; // immer libeary use
    },
    decreament: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += parseInt(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAccount.pending, (state) => {
        state.pending = true;
      })
      .addCase(getUserAccount.fulfilled, (state, action) => {
        console.log(action, "ppppppppp");
        state.amount = parseInt(action.payload);
        state.pending = false;
      })
      .addCase(getUserAccount.rejected, (state) => {
        state.pending = false;
      });
  },
});

export const { increment, decreament, incrementByAmount } =
  accountSlice.actions;

export default accountSlice.reducer;
