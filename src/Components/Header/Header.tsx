import React from "react";

import cn from "classnames";

import "./styles.scss";

interface Props {
  children: string;
  level: number;
}

export function Header({ children, level = 1 }: Props): JSX.Element {
  const classNames = cn("header", `level${level}`);

  function getLevelNode(level: number, children: string) {
    switch (level) {
      case 1:
        return <h1 className={classNames}>{children}</h1>;
      case 2:
        return <h2 className={classNames}>{children}</h2>;
      case 3:
        return <h3 className={classNames}>{children}</h3>;
      case 4:
        return <h4 className={classNames}>{children}</h4>;
      case 5:
        return <h5 className={classNames}>{children}</h5>;
      case 6:
        return <h6 className={classNames}>{children}</h6>;
    }
  }

  return <div className={classNames}>{getLevelNode(level, children)}</div>;
}
