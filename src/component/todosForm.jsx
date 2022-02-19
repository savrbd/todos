import React from "react";
import TextField from "./textField";
import SelectField from "./selectField";

const TodoForm = ({todos, users, data, onChange, onSubmit}) => {
    
  return (
    <div className="d-flex flex-column p-2 m-2 shadow">
      <h5>Блок для редактирования и добавления товара</h5>
      <form onSubmit={onSubmit}>
        <SelectField
          label="выберите userId"
          defaultOption="Choose..."
          options={users}
          onChange={onChange}
          value={data.userId}
        />
        <TextField
          label="title"
          name="title"
          value={data.title}
          onChange={onChange}
        />
        <button type="submit" className="btn btn-outline-primary" >
            Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
