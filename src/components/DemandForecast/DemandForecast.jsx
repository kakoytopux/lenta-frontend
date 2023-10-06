import { Outlet } from 'react-router-dom';
import DemandForecastNav from '../DemandForecastNav/DemandForecastNav';
import Filter from '../Filters/Filter';
import Header from '../Header/Header';
import './DemandForecast.scss';
import { useState } from 'react';

export default function DemandForecast() {
  const [complex, setComplex] = useState([]);
  const [product, setProduct] = useState([]);
  const [group, setGroup] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);

  return (
    <>
      <Header />
      <main className='content'>
        <DemandForecastNav />
        <div className='section-box-row'>
          <section className='filters'>
            <Filter
            name='Торговые комплексы'
            placeholder='Поиск по ТК'
            setData={setComplex} />
            <Filter
            name='Товары'
            placeholder='Поиск по товарам'
            setData={setProduct} />
            <Filter
            name='Группы'
            placeholder='Поиск по группам'
            setData={setGroup} />
            <Filter
            name='Категории'
            placeholder='Поиск по категориям'
            setData={setCategory} />
            <Filter
            name='Подкатегории'
            placeholder='Поиск по подкатегориям'
            setData={setSubcategory} />
          </section>
          {
          complex.length > 0 && product.length > 0 ?
          <Outlet context={[ product, complex ]} />
          :
          <p className='chart-none'>
            Выберете торговый комплекс и товар чтобы перейти к прогнозу
          </p>
          }
        </div>
      </main>
    </>
  );
}
