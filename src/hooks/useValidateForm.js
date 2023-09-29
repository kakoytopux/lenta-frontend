import { useState } from "react";

export default function useValidateForm() {
  const [errMessage, setErrMessage] = useState({});
  const [valid, setValid] = useState(false);

  function checkField(evt) {
    const elTarget = evt.target;

    elTarget.validity.patternMismatch ? setErrMessage({ [elTarget.name]: 'Неверный формат email' }) : setErrMessage({});
    
    setValid(elTarget.closest('.form').checkValidity());
  }

  return [
    errMessage,
    checkField,
    valid,
  ];
}
