import React from "react";
import styled from "styled-components";

import Card from "./Card.js";

const Boxes = styled.div`
    display: flex;
    flex-flow: row wrap;
`;

const Button = styled.button`
    width: 25%;
    height: 50px;
    background: rgb(0,2,6);
    background: radial-gradient(circle, rgba(0,2,6,0.938813025210084) 0%, rgba(0,10,41,0.908000700280112) 100%);
    color: #3973ac;
    font-size: 1.15rem;
    border: none;
    :hover {
        border:none;
        transition: all 1s ease-in-out;
        box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
        background: rgb(195,215,255);
        background: radial-gradient(circle, rgba(195,215,255,0.938813025210084) 0%, rgba(86,126,255,0.908000700280112) 100%);
    }
`;


const Container = props => {

    console.log("container", props)
    return (
        <div>
            <Button onClick={props.handleGetData}>Get Current Pricing</Button>
            {props.prices.length ? (
                <Boxes>
                   {props.prices.map(price => (
                      <Card price={price} />
                   ))}
                </Boxes>
             ) : (
                <p>^^^ Only Click If Prepared For Heartbreak ^^^</p>
             )
          }
        </div>
    )
}

export default Container;

// {props.prices.data.map(price => {
//     return (
//         <Card price={price}/>
//     )
// })}