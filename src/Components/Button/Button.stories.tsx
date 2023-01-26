import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import React from "react";

import { Button } from "./Button";

export default {
  title: "MY/Кнопка",
  component: Button,
  decorators: [withKnobs],
};

const colors = {
  Crimson: "crimson",
  Aqua: "aqua",
  Lime: "lime",
};

export const Default = () => {
  return (
    <Button
      disabled={boolean("Disabled:", false)}
      onClick={action("Кнопка нажата!")}
      color={select("Цвет:", colors, "crimson")}
    >
      {text("Текст:", "Текст кнопки")}
    </Button>
  );
};
