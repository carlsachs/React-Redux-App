import React from 'react';
import './App.css';
import { connect } from "react-redux";
import {getData} from "./actions/actions.js";

import Container from "./components/Container.js";

function App(props) {

  console.log(props);

  const handleGetData = e => {
    e.preventDefault();
    props.getData();
    console.log(props.prices)
  };

  return (
    <div className="App">
        <h1>Crypto Ticker Data</h1>
        <Container handleGetData={handleGetData} prices={props.prices}/>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      prices: state.prices,
      error: state.error,
      isfetchingData: state.isfetchingData
  }
}
export default connect(
  mapStateToProps,
  { getData }
)(App);
