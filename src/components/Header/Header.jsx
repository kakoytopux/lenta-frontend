import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import { Input } from 'antd';

export default function Header() {
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
            <li className='header__list'>
              <NavLink
              to='/compare-forecasts'
              className={({ isActive }) =>
              `header__list-link ${isActive ? 'header__list-link_active' : ''}`}>
                Сравнить качество прогнозов
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className='header__box'>
        <form
        method='get'
        className='header__form-search'>
          <Input
          className='header__field-search'
          placeholder='Поиск по ТК, категориям и товарам'
          required
          name='search'
          type='text' />
        </form>
        <Link
        to='/*'
        className='header__settings'></Link>
      </div>
    </header>
  );
}
