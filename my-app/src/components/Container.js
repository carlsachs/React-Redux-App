import React from "react";
import { connect } from "react-redux";
import {getData} from "../actions/actions.js";

const Container = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };
    return (
        <div>
        <button onClick={handleGetData}>Get Current Pricing</button>
        </div>
    )


}