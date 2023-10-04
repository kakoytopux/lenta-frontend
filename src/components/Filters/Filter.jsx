import { Input, Checkbox } from 'antd';
import './Filter.scss';
import { useState } from 'react';

export default function Filters({ name, placeholder }) {
  const [checkboxName, setCheckboxName] = useState(['d', 's', 'r']);
  const [checkedList, setCheckedList] = useState([]);
  const [searchCheckboxName, setSearchCheckboxName] = useState(null);
  const [showColumnFilter, setShowColumnFilter] = useState(true);
  const CheckboxGroup = Checkbox.Group;
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

  return (
    <article className={`filter ${showColumnFilter ? '' : 'filter_hide'}`}>
      <h4
      className={`filter__title ${showColumnFilter ? '' : 'filter__title_hide'}`}
      onClick={changeShowColumnFilter}>{ name }</h4>
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
          <CheckboxGroup
          className='filter__checkbox'
          options={searchCheckboxName || checkboxName}
          value={checkedList}
          onChange={changeCheckbox} />
        </div>
      </div>
    </article>
  );
}
