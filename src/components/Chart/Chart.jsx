import { useEffect, useState } from 'react';
import './Chart.scss';
import { Line } from '@ant-design/charts';
import { mainApi } from "../../utils/MainApi";

export default function Chart({ product, complex, setSumDemand }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    complex.forEach(item => {
      mainApi.forecastData(localStorage.getItem('token'), item, product, '2023-07-19')
      .then(res => {
        let objectArr = [];
        let sum = 0;
        const dataArr = res.map(item => item.forecast);

        dataArr.forEach(item => {
          const values = Object.values(item);
          values.forEach(item => sum += item);

          Object.keys(item).forEach((key, index) => {
            objectArr.push({ date: key, value: values[index] });
          });
        });

        setData(objectArr);
        setSumDemand(sum);
      })
      .catch(err => console.log(err))
    })
  }, [complex, product, setSumDemand]);

  const config = {
    data,
    xField: 'date',
    yField: 'value',
    color: '#FFB900',
    point: {
      size: 5,
      shape: 'circle',
      style: {
        fill: '#FFB900',
        stroke: '#FFB900',
        lineWidth: 2,
      },
    },
    interactions: [
      {
        type: 'marker-active',
      },
    ],
  };

  return (
    <Line {...config} />
  );
}
