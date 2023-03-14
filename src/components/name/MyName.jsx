import useNameStore from "../../app/nameStore";

const MyName = () => {
  const { name } = useNameStore((state) => state.name);
  return (
    <div>
      <h2>I'm: {name}</h2>
    </div>
  );
};

export default MyName;
