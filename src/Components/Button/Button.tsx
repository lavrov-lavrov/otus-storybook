import React from "react";

import cn from "classnames";

import "./styles.scss";

interface Props {
  children: string;
  color?: "crimson" | "aqua" | "lime" | string;
  onClick: () => void;
  disabled: boolean;
}

export function Button({
  children,
  color = "crimson",
  onClick,
  disabled = false,
}: Props) {
  const classNames = cn("button", color, { disabled: disabled });

  return (
    <div className={classNames} onClick={onClick}>
      {children}
    </div>
  );
}
