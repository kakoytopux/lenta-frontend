import { NavLink } from 'react-router-dom';
import './DemandForecastNav.scss';
import { useDispatch, useSelector } from 'react-redux';
import { chartFalse, chartTrue } from '../../store/slices/chartSlice';

export default function DemandForecastNav({ complexChecked, productChecked }) {
  const chartSelector = useSelector(state => state.chart.value);
  const dispatch = useDispatch();

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
      <ul className='demand-forecast-nav__type-chart-lists'>
      {
      complexChecked.length > 0 && productChecked.length > 0 ?
      <>
        <li className='demand-forecast-nav__type-chart-list'>
          <button
          type='button'
          onClick={() => dispatch(chartTrue())}
          className={`demand-forecast-nav__type-chart-btn ${chartSelector ? 'demand-forecast-nav__type-chart-btn_active' : ''}`}>
            График
          </button>
        </li>
        <li className='demand-forecast-nav__type-chart-list'>
          <button
          type='button'
          onClick={() => dispatch(chartFalse())}
          className={`demand-forecast-nav__type-chart-btn ${chartSelector ? '' : 'demand-forecast-nav__type-chart-btn_active'}`}>
            Таблица
          </button>
        </li>
      </>
        :
        ''
      }
      </ul>
    </section>
  );
}
