import useCourseStore from "../../app/counterStore";
import CounterValue from "./CounterValue";
import "./Counter.css";

const Counter = () => {
  const { counterValue, increaseCounterValue, decreaseCounterValue } =
    useCourseStore((state) => ({
      counterValue: state.counterValue,
      increaseCounterValue: state.increaseCounterValue,
      decreaseCounterValue: state.decreaseCounterValue,
    }));

  return (
    <div className="form-container">
      <button
        onClick={() => counterValue > 0 && decreaseCounterValue(1)}
        className="counter-btn"
      >
        -
      </button>
      <CounterValue />
      <button onClick={() => increaseCounterValue(1)} className="counter-btn">
        +
      </button>
    </div>
  );
};

export default Counter;
