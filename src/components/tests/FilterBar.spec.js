import React from "react";
import { shallow } from "enzyme";
import FilterBar from "./../FilterBar";

describe("FilterBar", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <FilterBar filterType={""} filterHandle={jest.fn()} />
      ))
  );

  it("should render a <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("should have list", () => {
    expect(wrapper.find("li").length).toEqual(7);
  });

  it("should each li have name", () => {
    expect(wrapper.find("li").map(el => el.text())).toEqual([
      "name",
      "id",
      "age",
      "weight",
      "height",
      "hair color",
      "profession"
    ]);
  });
});
