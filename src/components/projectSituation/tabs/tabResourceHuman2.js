import React from 'react';
import {Bar} from '@ant-design/charts';

function PercentInvo(props) {
  let colors = 'blue';
  switch (props.type) {
    case 'Developer':
      colors = '#7B6CF1';
      break;
    case 'Comtor':
      colors = '#F5BF22';
      break;
    case 'BrSE':
      colors = '#647698';
      break;
    case 'QA':
      colors = '#61D9AB';
      break;
    case 'Tester':
      colors = 'blue';
      break;
    default:
  }
  let data = [
    {
      type: 'Tuân PS',
      percent: 38,
    },
    {
      type: 'Hiếu VV',
      percent: 52,
    },
    {
      type: 'Tuân SS',
      percent: 61,
    },
    {
      type: 'Chiến VT',
      percent: 100,
    },
    {
      type: 'Hiếu VV',
      percent: 48,
    },
    {
      type: 'Tùng NS',
      percent: 0,
    },
    {
      type: 'Hùng HH',
      percent: 0,
    },
    {
      type: 'Long ND',
      percent: 0,
    },
  ];
  var config = {
    data: data,
    xField: 'percent',
    yField: 'type',
    seriesField: 'type',
    color: function color(_ref) {
      var type = _ref.type;
      return colors;
    },
    legend: false,
    meta: {
      type: {alias: '类别'},
      percent: {alias: '销售额'},
    },
  };
  return <>
    <h1>{props.type}</h1>
    <Bar {...config} />
  </>;
}

export default PercentInvo;
