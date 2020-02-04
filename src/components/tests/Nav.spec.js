import React from "react";
import { shallow } from "enzyme";
import Nav from "./../Nav";

describe("Nav", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <Nav handleShowMore={jest.fn()} handleClear={jest.fn()} />
      ))
  );

  it("should render a <nav/> and two <button/>", () => {
    expect(wrapper.find("nav button").length).toEqual(2);
  });

  it("should have link to Up", () => {
    expect(wrapper.find("a").prop("href")).toEqual("#start");
  });
});
