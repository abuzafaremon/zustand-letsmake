import { Route, Routes } from "react-router";
import "./App.css";
import Counter from "./components/counter/Counter";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Name from "./pages/Name";
import Todo from "./pages/Todo";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/name" element={<Name />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
