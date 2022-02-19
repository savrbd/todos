import React from "react";

const TableBody = ({ todos, onTodoDelete, onTodoUpdate}) => {
    if (todos){
        return ( 
            <tbody>
                {todos.map((todo) => (
                    <tr key = {todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.userId}</td>
                        <td>{todo.title}</td>
                        <td><button type="button" className="btn btn-warning" onClick={()=>{onTodoDelete(todo.id)}}>delete</button></td>
                        <td><button type="button" className="btn btn-primary" onClick={()=>{onTodoUpdate(todo)}}>update</button></td>
                        
                    </tr>
                ))}
            </tbody>
        );
    } else{  return (
            <h5>Loading...</h5>
        )
    }
    
}
 
export default TableBody;