import React from "react";

import { Button } from "./Button";

import { mount, shallow } from "enzyme";

describe("Тест компонента кнопки", () => {
  const mockFn = jest.fn();

  it("проверка, что компонент смонтирован", () => {
    const button = mount(
      <Button onClick={mockFn} disabled={false}>
        Кнопка
      </Button>
    );

    expect(button.find("div").hasClass("button")).toBeTruthy();
  });

  it("проверка, что текст правильный", () => {
    const button = mount(
      <Button onClick={mockFn} disabled={false}>
        Кнопочка
      </Button>
    );

    expect(button.find(".button").text()).toMatch(/Кнопочка/);
  });

  it("Проверка события клика", () => {
    const button = shallow(
      <Button disabled={false} onClick={mockFn}>
        Кнопка
      </Button>
    );

    button.find(".button").simulate("click");

    expect(mockFn.mock.calls.length).toEqual(1);
  });
});
