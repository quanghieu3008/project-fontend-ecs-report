import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

function TabEffect(props) {
  var data = [
    {
      name: 'Man-month trên hợp đồng',
      man_month_reality: 'Tháng 1',
      man_month_contract: 18.9,
    },
    {
      name: 'Man-month trên hợp đồng',
      man_month_reality: 'Tháng 2',
      man_month_contract: 28.8,
    },
    {
      name: 'Man-month trên hợp đồng',
      man_month_reality: 'Tháng 3',
      man_month_contract: 39.3,
    },
    {
      name: 'Man-month trên hợp đồng',
      man_month_reality: 'Tháng 4',
      man_month_contract: 81.4,
    },
    {
      name: 'Man-month trên hợp đồng',
      man_month_reality: 'Tháng 5',
      man_month_contract: 47,
    },
    {
      name: 'Man-month trên hợp đồng',
      man_month_reality: 'Tháng 6',
      man_month_contract: 20.3,
    },
    {
      name: 'Man-month trên hợp đồng',
      man_month_reality: 'Tháng 7',
      man_month_contract: 24,
    },
    {
      name: 'Man-month trên hợp đồng',
      man_month_reality: 'Tháng 8',
      man_month_contract: 35.6,
    },
    {
      name: 'Man-month sử dụng thực tế',
      man_month_reality: 'Tháng 9',
      man_month_contract: 12.4,
    },
    {
      name: 'Man-month sử dụng thực tế',
      man_month_reality: 'Tháng 10',
      man_month_contract: 23.2,
    },
    {
      name: 'Man-month sử dụng thực tế',
      man_month_reality: 'Tháng 3',
      man_month_contract: 34.5,
    },
    {
      name: 'Man-month sử dụng thực tế',
      man_month_reality: 'Tháng 4',
      man_month_contract: 99.7,
    },
    {
      name: 'Man-month sử dụng thực tế',
      man_month_reality: 'Tháng 5',
      man_month_contract: 52.6,
    },
    {
      name: 'Man-month sử dụng thực tế',
      man_month_reality: 'Tháng 6',
      man_month_contract: 35.5,
    },
    {
      name: 'Man-month sử dụng thực tế',
      man_month_reality: 'Tháng 7',
      man_month_contract: 37.4,
    },
    {
      name: 'Man-month sử dụng thực tế',
      man_month_reality: 'Tháng 8',
      man_month_contract: 42.4,
    },
  ];
  var config = {
    data: data,
    isGroup: true,
    xField: 'man_month_reality',
    yField: 'man_month_contract',
    seriesField: 'name',
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  };
  return <Column {...config} />;
};

export default TabEffect;
