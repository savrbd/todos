import React from "react";

const SelectField = ({
    label,
    value,
    onChange,
    options
}) => {

    return (
        <div className="mb-3">
            <label htmlFor="validationCustom04" className="form-label">
                {label}
            </label>
            <select
                className="form-select"
                id="validationCustom04"
                name="userId"
                value={value}
                onChange={onChange}
            >
                <option disabled value="">Choose..</option>
                {options &&
                    options.map((option) => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))}
            </select>
        </div>
    );
};
export default SelectField;