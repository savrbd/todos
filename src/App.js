import React, { useEffect } from "react";
import Main from "./layout/main";
import Todos from "./layout/todos";
import { Route, Routes } from "react-router-dom";
import NavBar from "./component/navBar";
import { useDispatch } from "react-redux";
import { loadTodos } from "./store/todos";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTodos());
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/todos" element={<Todos />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
