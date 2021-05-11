import React, { useState } from 'react';
import { connect } from "react-redux";
import { Select } from 'antd';
import CustomPagination from './CustomPagination';

const mapStateToProps = ({ humanData }) => ({
    ...humanData
})

function HumanTableComponent(props) {
    const { Option } = Select;
    const { totalPage } = props;
    const [activePage, setActivePage] = useState(1);
    const [sizePage, setSizePage] = useState(10);
    const onShowSizeChange = (current, pageSize) => {
        setActivePage(current)
        props.initLoad(current, pageSize)

    }
    const handleChangeSelect = (value) => {
        setActivePage(1)
        setSizePage(value)
        onShowSizeChange(1, value)

    }
    let dataTable = props.humans ? props.humans.map((human, idx) => {
        const { name, age, score } = human
        return (

            <tr className="wrap-human-view-tables-tr" key={idx}>

                <td style={{ fontWeight: "bold" }}>{(activePage - 1) * sizePage + idx + 1}</td>
                <td>{score}</td>
                <td>{name}</td>
                <td>{age}</td>
            </tr>
        )
    }) : null;
    return (
        <div >
            <div className="wrap-human-component">
                <h1>Level nhân sự alo</h1>
            </div>
            <div className="wrap-human-view">
                <div className="wrap-human-view-detail-page">
                    <Select onChange={handleChangeSelect} defaultValue={sizePage} style={{ width: 70, color: "#4f5d73" }} >
                        {[10, 20, 50, 100].map((item, key) => {
                            return (<Option key={key} value={item}>{item}</Option>)
                        })}
                    </Select>
                    <p>{`Hiển thị ${(activePage - 1) * sizePage + 1} đến ${(activePage) * sizePage >= totalPage ? totalPage : (activePage) * sizePage} của ${totalPage} bản ghi`}</p>

                </div>
                <table className="wrap-human-view-tables">
                    <tr className="wrap-human-view-tables-tr">
                        <th>STT</th>
                        <th>Mã NV</th>
                        <th>Tên NV</th>
                        <th>Level</th>
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

export default connect(mapStateToProps)(HumanTableComponent);
