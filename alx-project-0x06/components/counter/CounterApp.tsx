import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/store/counterSlice";
import { RootState } from "@/store/store";

const CounterApp = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Counter App</h1>
      <p className="text-2xl">Count: {count}</p>
      <div className="flex gap-4">
        <button onClick={() => dispatch(increment())} className="bg-blue-500 text-white px-4 py-2 rounded">
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className="bg-red-500 text-white px-4 py-2 rounded">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
