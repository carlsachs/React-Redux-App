import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_ITEMS = "UPDATE_ITEMS";
export const IS_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios.get("https://api.coinlore.net/api/tickers/")
    .then(res => {
        console.log(res.data.data);
        dispatch({ type: UPDATE_ITEMS, payload: res.data.data });
    })
    .catch(err => {
        console.log("error fetching API from coingecko", err);
        dispatch({ type: IS_ERROR, payload: "Error fetching data from coinGecko." });
    })
}