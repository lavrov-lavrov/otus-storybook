import { withKnobs, object } from "@storybook/addon-knobs";

import React from "react";

import { Links } from "./Links";

export default {
  title: "MY/Ссылки",
  component: Links,
  decorators: [withKnobs],
};

const arr = object("Список итемов", [
  { number: 1, text: "Пункт первый в списке" },
  {
    number: "2",
    text: "Второй пункт, с очень длинным текстом, на всю страницу ваще",
  },
  { number: 3, text: "Три" },
]);

export const Default = () => {
  return <Links arr={arr} />;
};
