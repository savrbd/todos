import React from "react";

const TextField = ({ label, type, name, value, onChange, error }) => {
    return (
        <div className="mb-3">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    type="text"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-control"
                />
            </div>
        </div>
    );
};


export default TextField;
