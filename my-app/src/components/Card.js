import React from "react";
import styled from "styled-components";

const Box = styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 2%;
    width: 30%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    background: rgb(0,2,6);
    background: radial-gradient(circle, rgba(0,2,6,0.938813025210084) 0%, rgba(0,10,41,0.908000700280112) 100%);
    color: #3973ac;
    h1 {
        text-shadow: 1px 1px 3px #9fbfdf;
    }
    h2 {
        text-shadow: 1px 1px 2px #00b300;
    }
    h3 {
        text-shadow: 1px 1px 2px #00b300;
    }
`;


const Card = props => {
    const {price} = props;
    const {name, symbol, rank, price_usd, percent_change_24h, percent_change_1h, percent_change_7d, market_cap_usd} = price;
    return (
        <Box>
            <h1>Name: {name}</h1>
            <h2>Ticker: {symbol}</h2>
            <h3>Market Cap Rank: {rank}</h3>
            <h3>Price: ${price_usd}</h3>
            <h3>24Hr %Change: {percent_change_24h}%</h3>
            <h3>1Hr %Change: {percent_change_1h}%</h3>
            <h3>7 Day %Change: {percent_change_7d}%</h3>
            <h3>Market Cap: ${market_cap_usd}</h3>
        </Box>
    )
}
export default Card;