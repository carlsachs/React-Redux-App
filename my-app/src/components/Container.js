import React from "react";
import styled from "styled-components";

import Card from "./Card.js";

const Boxes = styled.div`
    display: flex;
    flex-flow: row wrap;
`;


const Container = props => {

    console.log("container", props)
    return (
        <div>
            <button onClick={props.handleGetData}>Get Current Pricing</button>
            {props.prices.length ? (
                <Boxes>
                   {props.prices.map(price => (
                      <Card price={price} />
                   ))}
                </Boxes>
             ) : (
                <p>Ready for a Heartbreak??</p>
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