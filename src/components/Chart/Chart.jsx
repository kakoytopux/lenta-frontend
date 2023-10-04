import './Chart.scss';
import { Line } from '@ant-design/charts';

export default function Chart() {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
  ];
  
  const config = {
    data,
    xField: 'year',
    yField: 'value',
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
    colorField: 'type', // or seriesField in some cases
    color:['#19CDD7','#DDB27C'],
  };

  return <Line {...config} />
}
