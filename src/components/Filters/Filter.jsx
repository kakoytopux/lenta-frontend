import { Input, Checkbox } from 'antd';
import './Filter.scss';
import { useEffect, useState } from 'react';

export default function Filters({ name, placeholder, setData, data }) {
  const [checkedList, setCheckedList] = useState([]);
  const [searchCheckboxName, setSearchCheckboxName] = useState(null);
  const [showColumnFilter, setShowColumnFilter] = useState(true);
  const indeterminate = checkedList.length > 0 && checkedList.length < data.length;
  const checkAll = data.length === checkedList.length;

  function changeShowColumnFilter() {
    setShowColumnFilter(!showColumnFilter);
  }

  function changeSearchField(evt) {
    const elValue = evt.target.value;
    let dataSearch = [];

    if(elValue.length === 0) {
      setSearchCheckboxName(null);
      return;
    }

    data.forEach(item => {
      if(item.includes(elValue)) {
        dataSearch.push(item);
      }
    });

    setSearchCheckboxName(dataSearch);
  }

  function changeCheckbox(list) {
    setCheckedList(list);
  }
  function selectAllCheckbox(evt) {
    setCheckedList(evt.target.checked ? data : []);
  }

  function chooseData() {
    if(searchCheckboxName) {
      return searchCheckboxName;
    }

    return data;
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
          value={checkedList}
          onChange={changeCheckbox}>
            {
              chooseData().map((item, index) => 
                <Checkbox
                key={index}
                value={item}>
                  {item}
                </Checkbox>
              )
            }
          </Checkbox.Group>
        </div>
      </div>
    </article>
  );
}
