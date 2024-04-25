import logo from "./logo.svg";
import "./App.css";

import { useSelector } from "react-redux";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import Reward from "./components/Reward";
import Admin from "./components/Admin";

function App() {
  const amount = useSelector((state) => state.account.amount);
  // const account = useSelector((state) => state.account);
  const bonus = useSelector((state) => state.bonus.points);

  return (
    <div className="App">
      <h4>APP</h4>
      {/* {account.pending ? ( */}
      {/* <p>Loading ....</p> */}
      {/* ) : account.error ? ( */}
      {/* <p>error</p> */}
      {/* ) : ( */}
      <h4>Current Amount:{amount} </h4>
      {/* )} */}
      <h4>Total Bonus: {bonus} </h4>

      <Account />
      <Bonus />
      <Reward />
      <Admin />
    </div>
  );
}

export default App;
