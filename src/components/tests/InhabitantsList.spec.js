import React from "react";
import { shallow } from "enzyme";
import InhabitantsList from "./../InhabitantsList";

describe("InhabitantsList", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <InhabitantsList
          inhabitants={[]}
          number={2}
          handleSearchFriends={jest.fn()}
        />
      ))
  );

  it("should render a <main/>", () => {
    expect(wrapper.find("main").length).toEqual(1);
  });

  it("should render a Card component", () => {
    wrapper.setProps({ inhabitants: [{}] });
    expect(wrapper.find("Card").length).toEqual(1);
  });
});
