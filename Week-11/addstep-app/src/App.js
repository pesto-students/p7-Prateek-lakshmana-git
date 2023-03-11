import logo from './logo.svg';
import './styles.css';
import { useSelector, useDispatch } from "react-redux";

import { addStep, reset } from "./action";

function App() {
  const state = useSelector((state) => state.count);

  const dispatch = useDispatch();
  console.log(state);
  return (
    <div className="App">
      <h1>You have walked {state} steps</h1>
      <div>
        <button className="button1" onClick={() => dispatch(addStep())}>
          Add Step
        </button>
        <button onClick={() => dispatch(reset())}>Rest</button>
      </div>
    </div>
  );
}

export default App;
