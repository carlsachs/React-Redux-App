import React from 'react';
import './App.css';
import { connect } from "react-redux";
import {getData} from "./actions/actions.js";
import styled from "styled-components";

import Container from "./components/Container.js";

const Title = styled.h1`
  color: #3973ac;
  text-shadow: 1px 1px 3px #9fbfdf;
`;


function App(props) {

  console.log(props);

  const handleGetData = e => {
    e.preventDefault();
    props.getData();
    console.log(props.prices)
  };

  return (
    <div className="App">
        <Title>Crypto Ticker Data</Title>
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
