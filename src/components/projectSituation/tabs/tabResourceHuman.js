import React from 'react';
import { Bar } from '@ant-design/charts';

function TabResourceHuman(props) {
  let data = [
    {
      departments: 'Developer',
      value: 38,
    },
    {
      departments: 'Comtor',
      value: 52,
    },
    {
      departments: 'BrSE',
      value: 61,
    },
    {
      departments: 'QA',
      value: 99,
    },
    {
      departments: 'Tester',
      value: 48,
    },
  ];
  var config = {
    data: data,
    xField: 'value',
    yField: 'departments',
    seriesField: 'departments',
    legend: { position: 'top-left' },
  };
  return <Bar {...config} />;
};

export default TabResourceHuman;
