import "./styles.css";
import { flip } from "./ActionCreator";
import { useSelector, useDispatch } from "react-redux";

export const Room = () => {
  const check = useSelector((state) => state.flip);
  const disptch = useDispatch();
  const lightedness = check ? "lit" : "dark";

  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={() => disptch(flip())}>flip</button>
    </div>
  );
};
