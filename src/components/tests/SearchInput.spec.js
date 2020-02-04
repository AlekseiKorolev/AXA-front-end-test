import React from "react";
import { shallow } from "enzyme";
import SearchInput from "./../SearchInput";

describe("SearchInput", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <SearchInput
          phrase={""}
          handleChange={jest.fn()}
          handleKeyPress={jest.fn()}
        />
      ))
  );

  it("render a <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });

  it("render searchPhrase", () => {
    wrapper.setProps({ phrase: "some phrase" });
    expect(wrapper.find("input[type='text']").prop("value")).toEqual(
      "some phrase"
    );
  });
});
