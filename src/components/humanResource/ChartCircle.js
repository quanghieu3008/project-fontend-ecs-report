import React from 'react'
import { Pie } from "@ant-design/charts";
import { Modal } from "antd";
import HumanTableComponent from "./HumanTableComponent";
import ModalPersonnelProject from "./ModalPersonnelProject";

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
        appendPadding: 10,
        data: data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
            type: 'inner',
            offset: '-30%',
            content: function content(_ref) {
                let percent = _ref.percent;
                return ''.concat(percent * 100, '%');
            },
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [{ type: 'element-active' }],
        legend: {
            layout: 'horizontal',
            position: 'bottom'
        },
    };
    return (
        <div className="chart-item">
            <h1>{title}</h1>
            <Pie {...config} onReady={(plot) => {
                if (props.notClick) return;
                plot.on('plot:click', (evt) => {
                    setVisible(true);
                });
            }} />
            <Modal
                title={title}
                visible={visible}
                width={1500}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                {props.title === "Level nhân sự" ?
                    <HumanTableComponent humans={props.humans} initLoad={props.initLoad} totalPage={props.totalPage} />
                    : <ModalPersonnelProject humans={props.humans} initLoad={props.initLoad} totalPage={props.totalPage} />}
            </Modal>
        </div>
    )
}

export default ChartCircle;
