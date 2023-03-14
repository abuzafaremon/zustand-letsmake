import React from "react";
import CourseForm from "../components/todo/CourseForm";
import CourseList from "../components/todo/CourseList";

const Todo = () => {
  return (
    <div>
      <h1>My Courses</h1>
      <CourseForm />
      <CourseList />
    </div>
  );
};

export default Todo;
