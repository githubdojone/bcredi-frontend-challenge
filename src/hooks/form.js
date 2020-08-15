import { useState } from "react";
import { validate } from "../utils/validations";

export const useForm = (callback, fields) => {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback(inputs);
  };

  const handleInputChange = (event) => {
    event.persist();

    const {
      target: { id, value },
    } = event;

    setInputs((inputs) => ({
      ...inputs,
      [id]: value,
    }));
  };

  const handleInputBlur = (event) => {
    event.persist();
    const {
      target: { id, value },
    } = event;

    setErrors({
      ...errors,
      ...validate(fields, id, value),
    });
  };

  return {
    handleSubmit,
    handleInputChange,
    handleInputBlur,
    errors,
    inputs,
  };
};
