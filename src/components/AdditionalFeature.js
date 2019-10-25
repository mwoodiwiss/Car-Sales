import React from "react";
import { connect } from "react-redux";
import { buyItem } from "../actions";

const AdditionalFeature = props => {
  return (
    <li>
      <button
        onClick={() => {
          props.buyItem(props.feature);
        }}
        className="button"
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    buyItem: feature => {
      dispatch(buyItem(feature));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AdditionalFeature);
