import React, { useState } from "react";
// import axios from "axios";
import TodosTable from "../component/table/todosTable";
import Pagination from "../component/pagination";
import { paginate } from "../utils/paginate";
import TodosForm from "../component/todosForm";
import getRandomInt from "../utils/getRandomInt"
import { useSelector } from "react-redux";
import { createTodo, getTodos, removeTodo, updateTodo } from "../store/todos";
import { useDispatch } from "react-redux";

const Todos = () => {
  const todos=useSelector(getTodos());
  const dispatch=useDispatch();


  
  // const [todos, setTodos] = useState();
  const [currentPage, setCurrentPage] = useState();
  const pageSize = 10;
  const users = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  // const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
  const dataClear = {
    id: "",
    userId: "",
    title: ""
  };
  const [data, setData] = useState(dataClear);
  // useEffect(() => {
  //   axios.get(TODOS_URL).then((res) => setTodos(res.data));
  // }, []);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const handleTodoDelete = (todoId) => {
    // const newTodos = todos.filter((c) => c.id !== todoId);
    // setTodos(newTodos);
    dispatch(removeTodo(todoId))
  };
  const handleTodoUpdate = (todo) => {
    setData(todo)
    
  };
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };
  const addNewTodo = () => {
    const newData = {...data, disabled:false, id:getRandomInt(250,400)}
    // setTodos((prevState)=>[...prevState, newData])
    dispatch(createTodo(newData))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.userId && data.title){
      if(!todos.some((c)=>{
        return c.id === data.id
        })){
          addNewTodo()
          } else {
            dispatch(updateTodo(data))
            // const newTodos = todos;
            // const elementIndex = todos.findIndex((el)=>el.id === data.id)
            // newTodos[elementIndex]= data;
            // setTodos([...newTodos])
            }
      setData(dataClear)
    }
}

  const allTodo = paginate(todos, currentPage, pageSize);

  if (todos) {
    return (
      <>
        <div className="container ">
          <div className="d-flex m-1">
            <TodosForm
              todos={todos}
              users={users}
              data={data}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
            <div>
              <TodosTable
                todos={allTodo}
                onTodoDelete={handleTodoDelete}
                onTodoUpdate={handleTodoUpdate}
              />
              <Pagination
                itemsCount={todos.length}
                pageSize={pageSize}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <h5>Loading...</h5>;
  }
};

export default Todos;
