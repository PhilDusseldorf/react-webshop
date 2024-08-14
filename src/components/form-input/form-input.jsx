import "./form-input.scss";
import { useEffect, useState } from "react";

// Funktion zur Generierung einer eindeutigen ID
const generateRandomId = () => {
  return `form-input-${Math.random().toString(36).substring(2, 9)}`;
};

const FormInput = ({ label, id, ...otherProps }) => {
  const [inputId, setInputId] = useState(id || generateRandomId());

  useEffect(() => {
    if (id) {
      setInputId(id);
    }
  }, [id]);

  return (
    <div className="group">
      <input id={inputId} className="form-input" {...otherProps} />
      {label && (
        <label
          htmlFor={inputId}
          className={`form-input-label ${
            otherProps.value.length ? "shrink" : ""
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
