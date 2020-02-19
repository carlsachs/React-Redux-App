import React from "react";
import { connect } from "react-redux";

const List = props => {
    return (
        <div>
        {props.prices.map(price => 
            <div>
                <h2>Price example</h2>
            </div>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        prices: state.prices,
        error: state.error
    }
}
export default connect(
    mapStateToProps,{}
)(List)