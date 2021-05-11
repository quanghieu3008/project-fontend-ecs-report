import React, { useState } from 'react';
import '../../../styles/human.css';
import CustomPagination from '../../humanResource/CustomPagination';
import { connect } from "react-redux";
import { Select } from 'antd';

const mapStateToProps = ({ humanData }) => ({
    ...humanData
})

function TabInfo(props) {
    const { Option } = Select;


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
    let dataTable = humans ? humans.map((human, idx) => {
        const { name, position, startdate, outdate } = human

        return (
            <tr className="wrap-human-view-tables-tr" key={idx}>
                <td style={{ fontWeight: "bold" }}>{(activePage - 1) * sizePage + idx + 1}</td>
                <td>{name}</td>
                <td>{position}</td>
                <td>{startdate}</td>
                <td>{outdate}</td>
            </tr>

        )
    }) : null;
    return (
        <div >
            <div className="wrap-human-component">
                <h1>Chi tiết dự án </h1>
            </div>
            <div className="wrap-human-view-detail" >
                <table className="wrap-human-component-detail-project">
                    <tr >
                        <th>Tên dự án</th>
                        <td>etfrg</td>
                        <th>Ngày bắt đầu</th>
                        <td>8/8/8</td>
                    </tr>
                    <tr>
                        <th >Khối</th>
                        <td >abc</td>
                        <th >Ngày kết thúc</th>
                        <td >9/9/9</td>
                    </tr>
                    <tr>
                        <th >Bộ phận</th>
                        <td>D1</td>
                        <th>Giá trị hợp đồng</th>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th >Khách hàng</th>
                        <td></td>
                        <th>Man Month</th>
                        <td>13</td>

                    </tr>
                    <tr>
                        <th >Loại dự án</th>
                        <td>Nội bộ</td>
                        <th>Trạng thái</th>
                        <td>Đang triển khai</td>

                    </tr>
                </table>
            </div>
            <div className="wrap-human-view-content">
                <p>Thông tin nhân viên tham gia</p>
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
                        <th>Họ và tên</th>
                        <th>Vị trí</th>
                        <th>Ngày bắt đầu</th>
                        <th>Ngày kết thúc</th>
                    </tr>
                    {dataTable}

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
        </div>
    )
}

export default connect(mapStateToProps)(TabInfo);
