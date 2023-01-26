import { withKnobs, text, select } from "@storybook/addon-knobs";

import React from "react";

import { Header } from "./Header";

export default {
  title: "MY/Заголовок",
  component: Header,
  decorators: [withKnobs],
};

const levels = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
};

export const Default = () => {
  return (
    <Header level={select("Уровень:", levels, 1)}>
      {text("Текст", "Заголовок для сторибука")}
    </Header>
  );
};
