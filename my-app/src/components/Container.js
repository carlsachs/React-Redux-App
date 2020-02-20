import React from "react";

import Card from "./Card.js";

const Container = props => {

    console.log("container", props)
    return (
        <div>
            <button onClick={props.handleGetData}>Get Current Pricing</button>
            {props.prices.length ? (
                <div>
                   {props.prices.map(price => (
                      <Card price={price} />
                   ))}
                </div>
             ) : (
                <p>No Items Yet, Press The button</p>
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