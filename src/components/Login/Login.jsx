import { useEffect, useState } from 'react';
import { Button, Input } from 'antd';
import styles from './Login.module.scss';
import useValidateForm from '../../hooks/useValidateForm';
import { mainApi } from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authTrue } from '../../store/slices/authSlice';

export default function Login() {
  const [emailValueField, setEmailValueField] = useState('');
  const [passwordValueField, setPasswordValueField] = useState('');
  const [eyePassword, setEyePassword] = useState(false);
  const { errMessage, checkField, valid, setErrMessage } = useValidateForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function changeEyePassword() {
    setEyePassword(!eyePassword);
  }

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
    setErrMessage({});

    mainApi.authUser(emailValueField, passwordValueField)
    .then(res => {
      localStorage.setItem('token', res.auth_token);
      navigate('/demand-forecast');
      dispatch(authTrue());
    })
    .catch(err => {
      setErrMessage({ email: 'Неправильный email', password: 'Неправильный пароль' });
      console.log(err);
    })
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if(token) {
      mainApi.userMeData(token)
      .then(() => {
        dispatch(authTrue());
        navigate('/demand-forecast');
      })
      .catch(err => console.log(err))
    }
  }, [dispatch, navigate]);

  return (
    <main className={styles.content}>
      <section className={styles.login}>
        <h1 className={styles.login__title}>Войти в аккаунт</h1>
        <form
        method='post'
        className={`${styles['login-form']} form`}
        noValidate
        onSubmit={onSubmit}>
          <div className={styles['login-form__box']}>
            <label
            htmlFor='email'
            className={styles['login-form__label']}>Email</label>
            <p className={styles['login-form__mess-err']}>{ errMessage.email }</p>
            <Input
            type='email'
            id='email'
            required
            className={`${styles['login-form__field']} ${errMessage.email ? styles['login-form__field_type_err'] : ''}`}
            name='email'
            pattern='[^@\s]+@[^@\s]+\.[^@\s]+'
            onChange={changeFieldEmail}
            value={emailValueField} />
          </div>
          <div className={styles['login-form__box']}>
            <label
            htmlFor='password'
            className={styles['login-form__label']}>Пароль</label>
            <p className={styles['login-form__mess-err']}>{ errMessage.password }</p>
            <div className={styles['login-form__box-field-eye']}>
              <Input
              type={eyePassword ? 'text' : 'password'}
              id='password'
              required
              className={`${styles['login-form__field']} ${errMessage.password ? styles['login-form__field_type_err'] : ''}`}
              name='password'
              onChange={changeFieldPassword}
              value={passwordValueField} />
              <div className={styles['login-form__box-btn-eye']}>
                <button
                type='button'
                className={`${styles['login-form__eye-btn']} ${eyePassword ? styles['login-form__eye-btn_type_show'] : '' }`}
                onClick={changeEyePassword}></button>
              </div>
            </div>
          </div>
          <Button
          type='primary'
          htmlType='submit'
          className={styles['login-form__submit']}
          disabled={!valid}>Войти</Button>
        </form>
      </section>
    </main>
  );
}
