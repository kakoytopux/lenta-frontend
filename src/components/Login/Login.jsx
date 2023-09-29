import { useState } from 'react';
import { Button } from 'antd';
import './Login.scss';
import useValidateForm from '../../hooks/useValidateForm';

export default function Login() {
  const [emailValueField, setEmailValueField] = useState('');
  const [passwordValueField, setPasswordValueField] = useState('');
  const [ errMessage, checkField, valid ] = useValidateForm();

  function changeFieldEmail(evt) {
    checkField(evt);

    setEmailValueField(evt.target.value);
  }
  function changeFieldPassword(evt) {
    checkField(evt);

    setPasswordValueField(evt.target.value);
  }
  function onSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <main className='content'>
      <section className='login'>
        <h1 className='login__title'>Войти в аккаунт</h1>
        <form
        method='post'
        className='login-form form'
        noValidate
        onSubmit={onSubmit}>
          <div className='login-form__box'>
            <label
            htmlFor='email'
            className='login-form__label'>Email</label>
            <p className='login-form__mess-err'>{ errMessage?.email }</p>
            <input
            type='email'
            id='email'
            required
            className='login-form__field'
            name='email'
            pattern='[^@\s]+@[^@\s]+\.[^@\s]+'
            onChange={changeFieldEmail}
            value={emailValueField} />
          </div>
          <div className='login-form__box'>
            <label
            htmlFor='password'
            className='login-form__label'>Пароль</label>
            <p className='login-form__mess-err'>{ errMessage?.password }</p>
            <div className='login-form__box-field-eye'>
              <input
              type='password'
              id='password'
              required
              className='login-form__field'
              name='password'
              onChange={changeFieldPassword}
              value={passwordValueField} />
              <button
              type='button'
              className='login-form__eye-btn'></button>
            </div>
          </div>
          <Button
          type='primary'
          htmlType='submit'
          className='login-form__submit'
          disabled={!valid}>Войти</Button>
        </form>
      </section>
    </main>
  );
}
