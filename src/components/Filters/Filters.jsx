import { Input, Checkbox } from 'antd';
import './Filters.scss';
import { useState } from 'react';

export default function Filters() {
  const [checkboxVal, setCheckboxVal] = useState([]);

  function changeCheckboxVal(evt) {
    const elValue = evt.target.value;
    const valueFind = checkboxVal.find(item => item === elValue);
    
    valueFind ?
    setCheckboxVal(checkboxVal.filter(item => item !== elValue)) : setCheckboxVal([...checkboxVal, elValue]);
  }


  function selectAllCheckbox() {
    
  }

  return (
    <section className='filters'>
      <article className='filter'>
        <h4 className='filter__title'>Торговые комплексы</h4>
        <form
        className='filter__form-search'
        method='post'>
          <Input
          className='filter__field'
          name='search'
          type='text'
          required
          placeholder='Поиск по ТК' />
        </form>
        <button
        className='filter__btn-select-all-checkbox'
        type='button'
        onClick={selectAllCheckbox}>Выбрать всё</button>
        <form
        method='post'
        className='filter__form-checkboxes'>
          <ul className='filter__lists-checkbox'>
            <li className='filter__list-checkbox'>
              <Checkbox
              className='filter__checkbox'
              onClick={changeCheckboxVal}
              defaultValue='123'>123</Checkbox>
            </li>
            <li className='filter__list-checkbox'>
              <Checkbox
              className='filter__checkbox'
              onClick={changeCheckboxVal}
              defaultValue='233'>123</Checkbox>
            </li>
            <li className='filter__list-checkbox'>
              <Checkbox
              className='filter__checkbox'
              onClick={changeCheckboxVal}
              defaultValue='1231'>123</Checkbox>
            </li>
          </ul>
        </form>
      </article>
    </section>
  );
}
