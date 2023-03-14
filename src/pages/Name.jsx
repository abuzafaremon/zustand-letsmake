import React from "react";
import NameForm from "../components/name/NameForm";
import MyName from "../components/name/MyName";

const Name = () => {
  return (
    <div className="main-container">
      <h1>My Name Changing</h1>
      <NameForm />
      <MyName />
    </div>
  );
};

export default Name;
