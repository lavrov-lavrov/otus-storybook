import React from "react";

import { render } from "enzyme";

import { Header } from "./Header";

describe("Тест компонента заголовков", () => {
  it("Проверка, что заголовок отрендерился", () => {
    const header = render(<Header level={1}>Заголовок 1</Header>);

    expect(header.find("h1").hasClass("header")).toBeTruthy();
  });

  it("Проверка текста", () => {
    const header = render(
      <Header level={4}>Заголовок четвертого уровня</Header>
    );

    expect(header.find("h4").text()).toEqual("Заголовок четвертого уровня");
  });
});
