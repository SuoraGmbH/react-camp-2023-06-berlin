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

// Das hier sind sog. "Action Creators"
const increment = () => {
  return { type: "Increment" };
};
const decrement = () => {
  return { type: "Increment" };
};

const ConnectedComponent = connect(
  (state: any) => {
    return {
      count: state.count,
    };
  },
  {
    onIncrement: increment,
    onDecrement: decrement,
  }
)(CounterWithReduxConnect);

const element = <ConnectedComponent />;

export default ConnectedComponent;
