import React from "react";

import { mount, shallow } from "enzyme";

import { Links } from "./Links";

describe("Тест компонента ссылок", () => {
  const arr = [
    { number: 1, text: "Ссылка 1" },
    { number: 2, text: "Ссылка 2" },
  ];

  it("Проверка, что компонент отрендерен правильно", () => {
    const links = mount(<Links arr={arr} />);

    expect(links.find(".links__item").length).toEqual(2);
  });

  it("Проверка верстки", () => {
    const links = shallow(<Links arr={arr} />);

    expect(links.find(".links")).toBeTruthy();
  });
});
