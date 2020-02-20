import React from "react";


const Card = props => {
    const {price} = props;
    const {name, symbol, rank, price_usd, percent_change_24hr, percent_change_1hr, percent_change_7d, market_cap_usd} = price;
    return (
        <div>
            <h2>Name: {name}</h2>
            <h2>Ticker: {symbol}</h2>
            <h3>Market Cap Rank: {rank}</h3>
            <h3>Price: {price_usd}</h3>
            <h3>24Hr %Change: {percent_change_24hr}</h3>
            <h3>1Hr %Change: {percent_change_1hr}</h3>
            <h3>7 Day %Change: {percent_change_7d}</h3>
            <h3>Market Cap: {market_cap_usd}</h3>
        </div>
    )
}
export default Card;