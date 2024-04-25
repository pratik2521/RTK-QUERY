import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementBonus } from "../slices/bonusSlice";


const Bonus = () => {
  const amount = useSelector((state) => state.account.amount);
  const bonus = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h4>Bonus components</h4>
        <h3>total points :{bonus} </h3>
        <button
          onClick={() => dispatch(incrementBonus())}
        >
          increment+
        </button>
      </div>
    </div>
  );
};

export default Bonus;
