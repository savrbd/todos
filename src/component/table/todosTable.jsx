import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const TodosTable = ({todos, onTodoDelete, onTodoUpdate }) => {
    return (
        <table className="table">
            <TableHeader/>
            <TableBody todos = { todos } onTodoDelete = {onTodoDelete} onTodoUpdate = { onTodoUpdate }/>
        </table>
    );
}
 
export default TodosTable;