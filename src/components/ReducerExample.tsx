import { useReducer } from "react";

const initialState = { id: 1, count: 0 };

type Action = { type: "increment" | "decrement" | "reset" };
const reducer = (state: { id: number; count: number }, action: Action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: initialState.count };
    default:
      return state;
  }
};

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count:{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};
export default ReducerExample;
