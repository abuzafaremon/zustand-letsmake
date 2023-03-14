import useCourseStore from "../../app/counterStore";

const CounterValue = () => {
  const counterValue = useCourseStore((state) => state.counterValue);
  return (
    <>
      <button className="counter-btn">{counterValue}</button>
    </>
  );
};

export default CounterValue;
