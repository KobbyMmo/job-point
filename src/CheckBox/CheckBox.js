import React from 'react';
import './CheckBox.css';
const Checkbox = ({
    field: { name, value, onChange, onBlur },
    id,
    label,
    ...props
  }) => {
    return (
      <div>
        <input
        style={{width:"auto"}}
          name={name}
          id={id}
          type="checkbox"
          value={value}
          checked={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <label htmlFor={id}>
          {label}
        </label>

      </div>
    );
  };
  
  export default Checkbox;