import React  from 'react'
import {Line} from "@ant-design/charts";
import {Modal} from "antd";
import PersonnelChange from "./PersonnelChange";

function ChartCircle(props) {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');
  const { data, title } = props;

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const config = {
    data: data,
    xField: 'month',
    yField: 'members',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: function formatter(v) {
          return v;
        },
      },
    },
    legend: { position: 'right' },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
  };

    return (
        <div className="chart-item">
          <h1>{title}</h1>
          <Line {...config} onReady={(plot) => {
            if(props.notClick) return;
            plot.on('plot:click', (evt) => {
              setVisible(true);
            });
          }}/>
          <Modal
            title={title}
            visible={visible}
            width={1500}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
          >
            <PersonnelChange humans={props.humans} initLoad={props.initLoad} totalPage={props.totalPage} />
          </Modal>
        </div>
    )
}

export default ChartCircle;
