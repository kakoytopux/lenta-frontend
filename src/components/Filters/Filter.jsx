import { Input, Checkbox } from 'antd';
import './Filter.scss';
import { useEffect, useState } from 'react';

export default function Filters({ name, placeholder, setData }) {
  const [checkboxName, setCheckboxName] = useState(['d', 's', 'r']);
  const [checkedList, setCheckedList] = useState([]);
  const [searchCheckboxName, setSearchCheckboxName] = useState(null);
  const [showColumnFilter, setShowColumnFilter] = useState(true);
  const indeterminate = checkedList.length > 0 && checkedList.length < checkboxName.length;
  const checkAll = checkboxName.length === checkedList.length;

  function changeShowColumnFilter() {
    setShowColumnFilter(!showColumnFilter);
  }

  function changeSearchField(evt) {
    const elValue = evt.target.value;

    if(elValue.length === 0) {
      setSearchCheckboxName(null);
      return;
    }

    setSearchCheckboxName(checkboxName.filter(item => item === elValue));
  }

  function changeCheckbox(list) {
    setCheckedList(list);
  }
  function selectAllCheckbox(evt) {
    setCheckedList(evt.target.checked ? checkboxName : []);
  }

  useEffect(() => {
    setData(checkedList);
  }, [checkedList, setData]);

  return (
    <article className={`filter ${showColumnFilter ? '' : 'filter_hide'}`}>
      <h3
      className={`filter__title ${showColumnFilter ? '' : 'filter__title_hide'}`}
      onClick={changeShowColumnFilter}>{ name }</h3>
      <div className={`filter__container ${showColumnFilter ? '' : 'filter__container_hide'}`}>
        <Input
        className='filter__field'
        name='search'
        type='text'
        required
        placeholder={placeholder}
        onChange={changeSearchField} />
        <div className='filter__box-checkbox'>
          <Checkbox
          className='filter__select-all-checkbox'
          indeterminate={indeterminate}
          onChange={selectAllCheckbox}
          checked={checkAll}>Выбрать всё</Checkbox>
          <Checkbox.Group
          className='filter__checkbox'
          options={searchCheckboxName || checkboxName}
          value={checkedList}
          onChange={changeCheckbox} />
        </div>
      </div>
    </article>
  );
}
