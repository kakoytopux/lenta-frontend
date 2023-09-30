import { useState } from "react";

export default function useValidateForm() {
  const [errMessage, setErrMessage] = useState({});
  const [valid, setValid] = useState(false);

  function checkField(evt) {
    const elTarget = evt.target;

    elTarget.validity.patternMismatch ?
    setErrMessage({ ...errMessage, [elTarget.name]: 'Неверный формат email' }) : setErrMessage({...errMessage, [elTarget.name]: ''});
    elTarget.validity.valueMissing &&
    setErrMessage({ ...errMessage, [elTarget.name]: 'Необходимо заполнить данное поле' });
    
    setValid(elTarget.closest('.form').checkValidity());
  }

  return [
    errMessage,
    checkField,
    valid,
    setErrMessage,
  ];
}
