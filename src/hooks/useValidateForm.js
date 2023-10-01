import { useState } from "react";

export default function useValidateForm() {
  const [errMessage, setErrMessage] = useState({});
  const [valid, setValid] = useState(false);

  function checkField(evt) {
    const elTarget = evt.target;
    const elName = elTarget.name;

    elTarget.validity.patternMismatch ?
    setErrMessage({ ...errMessage, [elName]: 'Неверный формат email' }) : setErrMessage({...errMessage, [elName]: ''});
    elTarget.validity.valueMissing &&
    setErrMessage({ ...errMessage, [elName]: 'Необходимо заполнить данное поле' });
    
    setValid(elTarget.closest('.form').checkValidity());
  }

  return [
    errMessage,
    checkField,
    valid,
    setErrMessage,
  ];
}
