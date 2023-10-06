import { useState } from 'react';
import './ChartBox.scss';
import { Radio } from 'antd';

export default function ChartBox({ element: Chart, product, complex }) {
  const [radioValue, setRadioValue] = useState('');

  function changeRadio(evt) {
    setRadioValue(evt.target.value);
  }

  return (
    <article className='chart'>
      <h3 className='chart__product'>{product} (шт)</h3>
      <p className='chart__complex'>ТК {complex.join(', ')}</p>
      <p className='chart__demand'>Будущий спрос на 14 дней: 2500 шт.</p>
      { Chart }
      <Radio.Group
      onChange={changeRadio}
      value={radioValue}
      className='chart__radio-box'>
        <Radio
        className='chart__radio'
        value={''}>Общий прогноз</Radio>
        {
          complex.map((item, index) =>
            <Radio
            className='chart__radio'
            key={index}
            value={item}>{item}</Radio>
          )
        }
      </Radio.Group>
    </article>
  );
}
