import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "../reducers/rewardReducer";
// import { incrementBonus } from "../slices/bonusSlice";

const Reward = () => {
  //   const amount = useSelector((state) => state.account.amount);
  const bonus = useSelector((state) => state.reward.points);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h4>Reward components</h4>
        <h3>total points :{bonus} </h3>
        <button onClick={() => dispatch(increment())}>increment+</button>
        <button onClick={() => dispatch(incrementByAmount(6))}>
          incrementByAmount+
        </button>
      </div>
    </div>
  );
};

export default Reward;
