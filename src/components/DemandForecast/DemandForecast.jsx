import { Outlet } from 'react-router-dom';
import DemandForecastNav from '../DemandForecastNav/DemandForecastNav';
import Filter from '../Filters/Filter';
import Header from '../Header/Header';
import styles from './DemandForecast.module.scss';
import { useState, useEffect } from 'react';
import { mainApi } from '../../utils/MainApi';

export default function DemandForecast() {
  const [complexChecked, setComplexChecked] = useState([]);
  const [productChecked, setProductChecked] = useState([]);
  const [groupChecked, setGroupChecked] = useState([]);
  const [categoryChecked, setCategoryChecked] = useState([]);
  const [subcategoryChecked, setSubcategoryChecked] = useState([]);
  const [spin, setSpin] = useState(false);
  const [tk, setTk] = useState([]);
  const [product, setProduct] = useState([]);
  const [group, setGroup] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);

  useEffect(() => {
    setSpin(true);

    const token = localStorage.getItem('token');
    
    Promise.all([
      mainApi.productData(token),
      mainApi.shopData(token),
    ])
    .then(([productItem, shopItem]) => {
      productItem.forEach(item => {
        setProduct(prevState => [...prevState, item.sku]);
        setGroup(prevState => [...prevState, item.group]);
        setCategory(prevState => [...prevState, item.category]);
        setSubcategory(prevState => [...prevState, item.subcategory]);
      });
      shopItem.forEach(item => {
        setTk(prevState => [...prevState, item.store]);
      });
    })
    .catch(err => console.log(err))
    .finally(() => setSpin(false));
  }, []);

  return (
    <>
      <Header />
      <main className={styles.content}>
        <DemandForecastNav
        complexChecked={complexChecked}
        productChecked={productChecked} />
        <div className={styles['section-box-row']}>
          <section className={styles.filters}>
            <Filter
            name='Торговые комплексы'
            placeholder='Поиск по ТК'
            setData={setComplexChecked}
            data={tk}
            spin={spin} />
            <Filter
            name='Товары'
            placeholder='Поиск по товарам'
            setData={setProductChecked}
            data={product}
            spin={spin} />
            <Filter
            name='Группы'
            placeholder='Поиск по группам'
            setData={setGroupChecked}
            data={group}
            spin={spin} />
            <Filter
            name='Категории'
            placeholder='Поиск по категориям'
            setData={setCategoryChecked}
            data={category}
            spin={spin} />
            <Filter
            name='Подкатегории'
            placeholder='Поиск по подкатегориям'
            setData={setSubcategoryChecked}
            data={subcategory}
            spin={spin} />
          </section>
          {
          complexChecked.length > 0 && productChecked.length > 0 ?
          <Outlet context={[ productChecked, complexChecked ]} />
          :
          <p className={styles['chart-none']}>
            Выберете торговый комплекс и товар чтобы перейти к прогнозу
          </p>
          }
        </div>
      </main>
    </>
  );
}
