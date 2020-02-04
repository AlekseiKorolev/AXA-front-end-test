import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./../SearchBar";
import FilterBar from "./../FilterBar";
import SearchInput from "./../SearchInput";

describe("SearchBar", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <SearchBar handleSearch={jest.fn()} loading={false} hintUi={""} />
      ))
  );

  it("render a <header/>", () => {
    expect(wrapper.find("header").length).toEqual(1);
  });

  it("render a FilterBar and SearcInput components", () => {
    expect(
      wrapper.containsMatchingElement([
        <FilterBar filterType={""} filterHandle={jest.fn()} />,
        <SearchInput
          phrase={""}
          handleChange={jest.fn()}
          handleKeyPress={jest.fn()}
        />
      ])
    ).toEqual(true);
  });
});
