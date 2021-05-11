import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/humanActions';
import Search from "../components/Search";
import {Collapse } from "antd";
import ListProject from "../components/projectSituation/ListProject";

const { Panel } = Collapse;


const mapStateToProps = (state) => {
  return {
    ...state.demo
  }
}

function mapDispatchToProps(dispatch) {
    return {
        searchItem: function (data) {
            const searchAction = actions.searchHumanAction(data)
            dispatch(searchAction)
        },
        getPagination:function(activePage,totalPage){
          const action =actions.getHumansAction(activePage,totalPage)
          dispatch(action)
        }
    }
}

class PrjSitutionContainer extends Component {
    componentDidMount() {
      this.props.getPagination(1,5)
    }
    handleCallback = (key) => {
  }
    render() {

        return (
            <div className="container wrap-human-container">
                <Search searchItem={this.props.searchItem} />
              <Collapse
                defaultActiveKey={['1']}
                onChange={this.handleCallback}
              >
                <Panel header="Total (24)" key="1">
                  <ListProject humans={this.props.humans} initLoad={this.props.getPagination} totalPage={this.props.totalPage} />
                </Panel>
                <Panel header="Division 1 (11)" key="2">
                  <ListProject humans={this.props.humans} initLoad={this.props.getPagination} totalPage={this.props.totalPage}/>
                </Panel>
                <Panel header="Division 2 (10)" key="3">
                  <ListProject humans={this.props.humans} initLoad={this.props.getPagination} totalPage={this.props.totalPage}/>
                </Panel>
                <Panel header="Division 3 (5)" key="4">
                  <ListProject humans={this.props.humans} initLoad={this.props.getPagination} totalPage={this.props.totalPage}/>
                </Panel>
                <Panel header="CRM (7)" key="5">
                  <ListProject humans={this.props.humans} initLoad={this.props.getPagination} totalPage={this.props.totalPage}/>
                </Panel>
                <Panel header="AI (1)" key="6">
                  <ListProject humans={this.props.humans} initLoad={this.props.getPagination} totalPage={this.props.totalPage}/>
                </Panel>
              </Collapse>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrjSitutionContainer)
