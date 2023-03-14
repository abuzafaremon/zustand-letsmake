import "./CourseForm.css";

import useCourseStore from "../../app/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);

  const handleCourseSubmit = (e) => {
    e.preventDefault();
    let courseTitle = e.target.name.value;
    if (!courseTitle) return alert("Please add a course title");
    addCourse({
      id: Date.now(),
      title: courseTitle,
    });
    e.target.name.value = "";
  };

  return (
    <>
      <form onSubmit={handleCourseSubmit}>
        <input name="name" className="form-input" />
        <button type="submit" className="form-submit-btn">
          Add Course
        </button>
      </form>
    </>
  );
};

export default CourseForm;
