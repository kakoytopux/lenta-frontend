import { Input, Checkbox, Spin } from 'antd';
import './Filter.scss';
import { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';

export default function Filters({ name, placeholder, setData, data, spin }) {
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
          {
          spin ? <Spin className='filter__spin' />  :
          <Checkbox.Group
          className='filter__checkboxes'
          value={checkedList}
          onChange={changeCheckbox}>
            <List
            className='filter__list'
            itemData={chooseData()}
            itemCount={chooseData().length}
            itemSize={36}
            height={200}
            style={{ overflowX: 'hidden', width: '100%' }}>
              {({ index, style }) => {
                return (
                  <Checkbox
                  key={index}
                  className='filter__checkbox'
                  style={style}
                  value={chooseData()[index]}>
                    {chooseData()[index]}
                  </Checkbox>
                )
              }}
            </List>
          </Checkbox.Group>
          }
        </div>
      </div>
    </article>
  );
}
