import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync } from "./counterSlice";

export const Counter = () => {
  //Obtener el valor del state
  const countState = useSelector((store) => store.counter);
  const { value, status } = countState;

  // Obtener el dispatch
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex">
        <span>
          {value} - {status}
        </span>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrement(10));
          }}
        >
          -
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(incrementAsync(1))}>Add Async</button>
      </div>
    </>
  );
};
