import React from 'react';
import { connect } from 'react-redux';
import Routes from './routes';
import 'antd/dist/antd.css'

const mapStateToProps = (state) => ({
  ...state.commonData
})
class App extends React.Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    )
  }
}
export default connect(mapStateToProps)(App);
