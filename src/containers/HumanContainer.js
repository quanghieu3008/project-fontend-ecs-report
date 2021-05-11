import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/humanActions';
import Search from "../components/Search";
import ChartCircle from "../components/humanResource/ChartCircle";
import { Col, Row } from "antd";
import ChartLine from "../components/humanResource/ChartLine";
// import DetailProject from './../components/projectSituation/ListProject';


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
const mapStateToProps = (state) => {
    return {
        ...state.demo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initLoad: function (activePage, totalPage) {
            const action = actions.getHumansAction(activePage, totalPage)
            dispatch(action)
        },
        addItem: function (data) {
            const addAction = actions.addHumansAction(data)
            dispatch(addAction)
        },
        editItem: function (data) {
            const editAction = actions.editHumansAction(data)
            dispatch(editAction)
        },
        searchItem: function (data) {
            const searchAction = actions.searchHumanAction(data)
            dispatch(searchAction)
        }
    }
}


class HumanContainer extends Component {
    componentDidMount() {
        this.props.initLoad(1, 10)
    }

    render() {
        return (
            <div className="container wrap-human-container">
                <Search
                    searchItem={this.props.searchItem} />
                <Row>
                    <Col span={12}><ChartCircle data={data1} title="Level nhân sự" humans={this.props.humans} initLoad={this.props.initLoad} totalPage={this.props.totalPage}/></Col>
                    <Col span={12}><ChartCircle data={data2} title="Nhân sự - Dự án" humans={this.props.humans} initLoad={this.props.initLoad} totalPage={this.props.totalPage} /></Col>
                </Row>
                <Row>
                    <Col span={4}></Col>
                    <Col span={18}><ChartLine data={data3} title="Thay đổi nhân sự" humans={this.props.humans} initLoad={this.props.initLoad} totalPage={this.props.totalPage} /></Col>
                    <Col span={4}></Col>
                </Row>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HumanContainer)
