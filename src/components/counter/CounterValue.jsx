import useCourseStore from "../../app/counterStore";

const CounterValue = () => {
  const counterValue = useCourseStore((state) => state.counterValue);
  return (
    <div>
      <button className="form-submit-btn">{counterValue}</button>
    </div>
  );
};

export default CounterValue;
