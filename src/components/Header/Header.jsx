import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
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
    <header className='header'>
      <div className='header__box'>
        <div className='header__logo'></div>
        <nav className='header__navigation'>
          <ul className='header__lists'>
            <li className='header__list'>
              <NavLink
              to='/demand-forecast'
              className={({ isActive }) =>
              `header__list-link ${isActive ? 'header__list-link_active' : ''}`}>
                Прогноз спроса
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className='header__box'>
        <form
        method='post'
        className='header__form'
        onSubmit={onSubmit}>
          <Input
          className='header__field'
          placeholder='Поиск по ТК, категориям и товарам'
          required
          name='search'
          type='text'
          onChange={changeFieldSearch}
          value={searchValueField} />
        </form>
        <Link
        to='/settings'
        className='header__settings'></Link>
      </div>
    </header>
  );
}
