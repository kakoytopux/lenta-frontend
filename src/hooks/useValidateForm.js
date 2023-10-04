import { useState } from "react";

export default function useValidateForm() {
  const [errMessage, setErrMessage] = useState({});
  const [valid, setValid] = useState(false);

  function checkField(evt) {
    const elTarget = evt.target;
    const elName = elTarget.name;
    const validity = elTarget.validity;

    if(elName === 'email') {
      validity.patternMismatch &&
      setErrMessage({ ...errMessage, [elName]: 'Неверный формат email'});
    }

    validity.valueMissing &&
    setErrMessage({ ...errMessage, [elName]: 'Необходимо заполнить данное поле' });

    if(validity.valid) {
      setErrMessage({...errMessage, [elName]: ''});
    }
    
    setValid(elTarget.closest('.form').checkValidity());
  }

  return {
    errMessage,
    checkField,
    valid,
    setErrMessage,
  };
}
