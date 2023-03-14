import useNameStore from "../../app/nameStore";
import "./NameFrom.css";

const NameForm = () => {
  const addName = useNameStore((state) => state.changeName);

  const handleChangeName = (e) => {
    const name = e.target.value;
    addName({
      name: name,
    });
  };

  return (
    <div className="form-container">
      <input
        onChange={handleChangeName}
        placeholder="Your Name"
        className="form-input"
      />
    </div>
  );
};

export default NameForm;
