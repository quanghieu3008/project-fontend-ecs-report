import React, { useState } from 'react'
import CustomPagination from './CustomPagination';

import { connect } from "react-redux";
import { Select } from 'antd'

const mapStateToProps = ({ humanData }) => ({
    ...humanData
})

function PersonnelChange(props) {
    const { Option } = Select
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
        const { name, score, startdate, outdate } = human
        return (
            <tr className="wrap-human-view-tables-tr" key={idx}>
                <td style={{ fontWeight: "bold" }}>{(activePage - 1) * sizePage + idx + 1}</td>
                <td>{score}</td>
                <td>{name}</td>
                <td>{startdate}</td>
                <td>{outdate}</td>
            </tr>
          
        )
    }) : null;
    return (
        <div>
            <div className="wrap-human-view">
                <div className="wrap-human-view-detail-page">
                    <Select defaultValue={sizePage} onChange={handleChangeSelect} style={{ width: 70, color: "#4f5d73" }} >
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
                        <th>Ngày tham gia</th>
                        <th>Ngày out</th>

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

export default connect(mapStateToProps)(PersonnelChange);

