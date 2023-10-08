import { Outlet } from 'react-router-dom';
import DemandForecastNav from '../DemandForecastNav/DemandForecastNav';
import Filter from '../Filters/Filter';
import Header from '../Header/Header';
import './DemandForecast.scss';
import { useState, useEffect } from 'react';
import { mainApi } from '../../utils/MainApi';

export default function DemandForecast() {
  const [complexChecked, setComplexChecked] = useState([]);
  const [productChecked, setProductChecked] = useState([]);
  const [groupChecked, setGroupChecked] = useState([]);
  const [categoryChecked, setCategoryChecked] = useState([]);
  const [subcategoryChecked, setSubcategoryChecked] = useState([]);

  const [product, setProduct] = useState([]);
  const [group, setGroup] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);

  useEffect(() => {
    mainApi.productsData(localStorage.getItem('token'))
    .then(res => {
      setProduct(res.map(item => item.sku));
      setGroup(res.map(item => item.group));
      setCategory(res.map(item => item.category));
      setSubcategory(res.map(item => item.subcategory));
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <>
      <Header />
      <main className='content'>
        <DemandForecastNav
        complexChecked={complexChecked}
        productChecked={productChecked} />
        <div className='section-box-row'>
          <section className='filters'>
            {/* <Filter
            name='Торговые комплексы'
            placeholder='Поиск по ТК'
            setData={setComplexChecked} /> */}
            <Filter
            name='Товары'
            placeholder='Поиск по товарам'
            setData={setProductChecked}
            data={product} />
            <Filter
            name='Группы'
            placeholder='Поиск по группам'
            setData={setGroupChecked}
            data={group} />
            <Filter
            name='Категории'
            placeholder='Поиск по категориям'
            setData={setCategoryChecked}
            data={category} />
            <Filter
            name='Подкатегории'
            placeholder='Поиск по подкатегориям'
            setData={setSubcategoryChecked}
            data={subcategory} />
          </section>
          {
          complexChecked.length > 0 && productChecked.length > 0 ?
          <Outlet context={[ productChecked, complexChecked ]} />
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
