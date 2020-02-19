import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_ITEMS = "UPDATE_ITEMS";
export const IS_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios.get("https://coingecko.com/api/documentations/v3")
    .then(res => {
        console.log(res);
        dispatch({ type: UPDATE_ITEMS, payload: res.data });
    })
    .catch(err => {
        console.log("error fetching API from coingecko", err);
        dispatch({ type: IS_ERROR, payload: "Error fetching data from coinGecko." });
    })
}