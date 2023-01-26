import React from "react";

import { ClickCounterButton } from "./ClickCounterButton";

interface Prop {
  start?: number;
}

export const ClickCounter: React.FC<Prop> = ({ start }) => {
  const [count, setCount] = React.useState(start || 0);

  function increment() {
    setCount(count + 1);
  }

  return <ClickCounterButton increment={increment}>{count}</ClickCounterButton>;
};
