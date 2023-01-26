import React from "react";

import "./styles.scss";

interface Item {
  number: string | number;
  text: string;
}

interface Props {
  arr: Item[];
}

export function Links({ arr }: Props): JSX.Element {
  return (
    <div className="links">
      {arr.map((item, index) => {
        return (
          <div key={index} className="links__item">
            <div className="links__bullet">{item.number}</div>
            <div className="links__text">{item.text}</div>
          </div>
        );
      })}
    </div>
  );
}
