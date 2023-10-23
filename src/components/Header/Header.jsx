import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { Input } from 'antd';
import { useState } from 'react';

export default function Header() {
  const [searchValueField, setSearchValueField] = useState('');

  function changeFieldSearch(evt) {
    setSearchValueField(evt.target.value);
  }
  function onSubmit(evt) {
    evt.preventDefault();
  }
  
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__box}>
          <div className={styles.header__logo}></div>
          <nav className={styles.header__navigation}>
            <ul className={styles.header__lists}>
              <li className={styles.header__list}>
                <NavLink
                to='/demand-forecast'
                className={({ isActive }) =>
                `${styles['header__list-link']} ${isActive ? styles['header__list-link_active'] : ''}`}>
                  Прогноз спроса
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.header__box}>
          <form
          method='post'
          className={styles.header__form}
          onSubmit={onSubmit}>
            <Input
            className={styles.header__field}
            placeholder='Поиск по ТК, категориям и товарам'
            required
            name='search'
            type='text'
            onChange={changeFieldSearch}
            value={searchValueField} />
          </form>
          <Link
          to='/settings'
          className={styles.header__settings}></Link>
        </div>
      </div>
    </header>
  );
}
