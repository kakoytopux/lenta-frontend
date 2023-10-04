import Chart from '../Chart/Chart';
import Filter from '../Filters/Filter';
import Header from '../Header/Header';
import './DemandForecast.scss';

export default function DemandForecast() {
  return (
    <>
      <Header />
      <main className='content'>
        <section className='filters'>
          <Filter
          name='Торговые комплексы'
          placeholder='Поиск по ТК' />
          <Filter
          name='Товары'
          placeholder='Поиск по товарам' />
          <Filter
          name='Группы'
          placeholder='Поиск по группам' />
          <Filter
          name='Категории'
          placeholder='Поиск по категориям' />
          <Filter
          name='Подкатегории'
          placeholder='Поиск по подкатегориям' />
        </section>
        <Chart />
      </main>
    </>
  );
}
