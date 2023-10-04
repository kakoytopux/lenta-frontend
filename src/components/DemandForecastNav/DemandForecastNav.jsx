import { NavLink } from 'react-router-dom';
import './DemandForecastNav.scss';

export default function DemandForecastNav() {
  return (
    <section className='demand-forecast-nav'>
      <div className='demand-forecast-nav__box-title'>
        <h2 className='demand-forecast-nav__title'>Прогноз спроса</h2>
        <p className='demand-forecast-nav__data-update'>Данные обновлены сегодня в 00:00</p>
      </div>
      <nav className='demand-forecast-nav__navigation'>
        <ul className='demand-forecast-nav__lists'>
          <li className='demand-forecast-nav__list'>
            <NavLink
            to='/demand-forecast'
            end
            className={({isActive}) =>
            `demand-forecast-nav__list-link ${isActive ? 'demand-forecast-nav__list-link_active' : ''}`}>
              Будущие прогнозы
            </NavLink>
          </li>
          <li className='demand-forecast-nav__list'>
            <NavLink
            to='/demand-forecast/past'
            className={({isActive}) =>
            `demand-forecast-nav__list-link ${isActive ? 'demand-forecast-nav__list-link_active' : ''}`}>
              Прошлые прогнозы
            </NavLink>
          </li>
          <li className='demand-forecast-nav__list'>
            <NavLink
            to='/demand-forecast/quality'
            className={({isActive}) =>
            `demand-forecast-nav__list-link ${isActive ? 'demand-forecast-nav__list-link_active' : ''}`}>
              Качество прогнозов
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}
