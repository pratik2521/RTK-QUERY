import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  getUserAccount,
  increment,
  incrementByAmount,
} from "../slices/accountSlice";

const Account = () => {
  const amount = useSelector((state) => state.account.amount);
  const bonus = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  return (
    <div>
      <div>
        <h4>Amount components</h4>
        <h3>Amount :{amount}</h3>
        <h3>points :{bonus}</h3>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decreament())}>decrement</button>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(value))}>
          incrementByAmount {value}
        </button>
        <button onClick={() => dispatch(getUserAccount(1))}>
          getUserAccount
        </button>
      </div>
    </div>
  );
};

export default Account;
