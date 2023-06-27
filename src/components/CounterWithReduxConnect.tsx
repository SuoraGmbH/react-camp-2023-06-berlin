// Warnung: Diese Komponente funktioniert nicht wirklich und ist nur "pseudocode"
import React from "react";
import { connect } from "react-redux";

interface Props {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CounterWithReduxConnect: React.FunctionComponent<Props> = ({
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <div>
      <span>Current Count: {count}</span>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

const ConnectedComponent = connect(
  (state: any) => {
    return {
      count: state.count,
    };
  },
  (dispatch) => {
    return {
      onIncrement: () => dispatch({ type: "Increment" }),
      onDecrement: () => dispatch({ type: "Decrement" }),
    };
  }
)(CounterWithReduxConnect);

const element = <ConnectedComponent />;

export default ConnectedComponent;
