import React, {useState} from 'react';
import '../../styles/human.css';
import CustomPagination from '../humanResource/CustomPagination';
import {connect} from "react-redux";
import {Col, Modal, Row, Select, Tabs} from 'antd';
import TabInfo from "./tabs/tabInfo";
import ChartCircle from "../humanResource/ChartCircle";
import ChartLine from "../humanResource/ChartLine";
import TabEffect from "./tabs/tabEffect";
import TabResourceHuman from "./tabs/tabResourceHuman";
import PercentInvo from "./tabs/tabResourceHuman2";

const { TabPane } = Tabs;
const {Option} = Select;

const data1 = [
  {
    type: 'Senior',
    value: 46,
  },
  {
    type: 'Junior',
    value: 15,
  },
  {
    type: 'Middle',
    value: 39,
  },
];

const data2 = [
  {
    type: 'Đang làm dự án',
    value: 54,
  },
  {
    type: 'Đang trainning',
    value: 19,
  },
  {
    type: 'Đang free',
    value: 27,
  },
];

const data3 = [
  {
    name: "NV mới",
    month: "Tháng 1",
    members: 2
  },
  {
    name: "NV mới",
    month: "Tháng 2",
    members: 3
  },
  {
    name: "NV mới",
    month: "Tháng 3",
    members: 4
  },
  {
    name: "NV mới",
    month: "Tháng 4",
    members: 5
  },
  {
    name: "NV mới",
    month: "Tháng 5",
    members: 6
  },
  {
    name: "NV mới",
    month: "Tháng 6",
    members: 7
  },
  {
    name: "NV mới",
    month: "Tháng 7",
    members: 8
  },
  {
    name: "NV mới",
    month: "Tháng 8",
    members: 9
  },
  {
    name: "NV mới",
    month: "Tháng 9",
    members: 10
  },
  {
    name: "NV mới",
    month: "Tháng 10",
    members: 11
  },
  {
    name: "NV mới",
    month: "Tháng 11",
    members: 12
  },
  {
    name: "NV mới",
    month: "Tháng 12",
    members: 13
  },
  {
    name: "NV nghỉ việc",
    month: "Tháng 1",
    members: 4
  },
  {
    name: "NV nghỉ việc",
    month: "Tháng 2",
    members: 3
  },
  {
    name: "NV nghỉ việc",
    month: "Tháng 3",
    members: 3
  },
  {
    name: "NV nghỉ việc",
    month: "Tháng 4",
    members: 3
  },
  {
    name: "NV nghỉ việc",
    month: "Tháng 5",
    members: 1
  },
  {
    name: "NV nghỉ việc",
    month: "Tháng 6",
    members: 0
  },
  {
    name: "NV nghỉ việc",
    month: "Tháng 7",
    members: 10
  },
  {
    name: "NV nghỉ việc",
    month: "Tháng 8",
    members: 10
  },
  {
    name: "NV mới",
    month: "Tháng 9",
    members: 10
  },
  {
    name: "NV nghỉ việc",
    month: "Tháng 10",
    members: 0
  },
  {
    name: "NV nghỉ việc",
    month: "Tháng 11",
    members: 0
  },
  {
    name: "NV nghỉ việc",
    month: "Tháng 12",
    members: 0
  },
  {
    name: "Tổng NV",
    month: "Tháng 1",
    members: 50
  },
  {
    name: "Tổng NV",
    month: "Tháng 2",
    members: 50
  },
  {
    name: "Tổng NV",
    month: "Tháng 3",
    members: 30
  },
  {
    name: "Tổng NV",
    month: "Tháng 4",
    members: 20
  },
  {
    name: "Tổng NV",
    month: "Tháng 5",
    members: 50
  },
  {
    name: "Tổng NV",
    month: "Tháng 6",
    members: 50
  },
  {
    name: "Tổng NV",
    month: "Tháng 7",
    members: 50
  },
  {
    name: "Tổng NV",
    month: "Tháng 8",
    members: 50
  },
  {
    name: "Tổng NV",
    month: "Tháng 9",
    members: 50
  },
  {
    name: "Tổng NV",
    month: "Tháng 10",
    members: 50
  },
  {
    name: "Tổng NV",
    month: "Tháng 11",
    members: 50
  },
  {
    name: "Tổng NV",
    month: "Tháng 12",
    members: 50
  },
];


function DetailProject(props) {
  
  const [visible, setVisible] = React.useState(false);
  const [modalText, setModalText] = React.useState('');

  const [activePage, setActivePage] = useState(1);
  const [sizePage, setSizePage] = useState(5);
  const { humans, totalPage } = props;

  const onShowSizeChange = (current, pageSize) => {
    setActivePage(current)
    props.initLoad(current, pageSize)

}
const handleChangeSelect = (value) => {
  setActivePage(1)
  setSizePage(value)
  onShowSizeChange(1, value)

}
  function callback(key) {
  }
  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
  };
  const showModal = (human) => {
    setVisible(true);
    setModalText(human.nameproject);
  }

  return (
    <div>
      <div className="wrap-human-component">
        <h1>Dự án </h1>
      </div>
      <div className="wrap-human-view">
        <div className="wrap-human-view-detail-page">
        <Select onChange={handleChangeSelect} defaultValue={sizePage} style={{ width: 70, color: "#4f5d73" }} >
                        {[5, 10, 20, 50].map((item, key) => {
                            return (<Option key={key} value={item}>{item}</Option>)
                        })}

                    </Select>
          <p>{`Hiển thị ${(activePage - 1) * sizePage + 1} đến ${(activePage) * sizePage >= totalPage ? totalPage : (activePage) * sizePage} của ${totalPage} bản ghi`}</p>
        </div>
        <table className="wrap-human-view-tables">
          <tr className="wrap-human-view-tables-tr">
            <th>#</th>
            <th>Tên dự án</th>
            <th>Top Project</th>
            <th>Quản lý dự án</th>
            <th>Khách hàng</th>
            <th>Trạng thái</th>
            <th>Ngày bắt đầu</th>
            <th>Ngày kết thúc</th>
          </tr>
          {
           humans ? humans.map((human, idx) => {
              return (
                <tr className="wrap-human-view-tables-tr" onClick={() => showModal(human)}>
                  <td style={{fontWeight: "bold"}}>{(activePage - 1) * sizePage + idx + 1}</td>
                  <td>- Dự án: {human.nameproject}</td>
                  <td>{human.topproject}</td>
                  <td>{human.manage}</td>
                  <td>{human.customer}</td>
                  <td>{human.status}</td>
                  <td>{human.startdate}</td>
                  <td>{human.outdate}</td>
                </tr>
              )
            }) : null}
        </table>
        <div className="wrap-human-view-pagination">
          <CustomPagination 
            onShowSizeChange={onShowSizeChange}
            setActivePage={setActivePage}
            activePage={activePage}
            totalPage={totalPage}
            sizePage={sizePage}
          />
        </div>
      </div>
      <Modal
        title={modalText}
        visible={visible}
        width={1500}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Tabs onChange={callback} type="card">
          <TabPane tab="Thông tin dự án" key="1">
            <TabInfo humans={props.humans}  initLoad={props.initLoad} totalPage={props.totalPage} />
          </TabPane>
          <TabPane tab="Cơ cấu dự án" key="2">
            <Row>
              <Col span={12}><ChartCircle data={data1} title="Cơ cấu dự án theo đơn vị" notClick={true}/></Col>
              <Col span={12}><ChartCircle data={data2} title="Cơ cấu dự án theo vị trí" notClick={true}/></Col>
            </Row>
            <Row>
              <Col span={12}><ChartCircle data={data1} title="Cơ cấu dự án theo level" notClick={true}/></Col>
              <Col span={12}><ChartLine data={data3} title="Thay đổi nhân sự" notClick={true}/></Col>
            </Row>
          </TabPane>
          <TabPane tab="Nhân sự dự án" key="3">
            <div className="modal-humans-resource">
              <div className="humans-resource-left"><TabResourceHuman /></div>
              <div className="humans-resource-right">
                <PercentInvo type='Developer'/>
                <PercentInvo type='Comtor'/>
                <PercentInvo type='BrSE'/>
                <PercentInvo type='QA'/>
                <PercentInvo type='Tester'/>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Hiệu quả dự án" key="4">
            <TabEffect />
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  )
}

export default DetailProject;
