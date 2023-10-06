import './Chart.scss';
import { Line } from '@ant-design/charts';

export default function Chart() {
  const data = [
    {
      date: '1991',
      value: 3,
    },
    {
      date: '1992',
      value: 4,
    },
    {
      date: '1993',
      value: 3.5,
    },
  ];
  
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
