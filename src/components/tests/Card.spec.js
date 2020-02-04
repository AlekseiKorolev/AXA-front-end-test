import React from "react";
import { shallow } from "enzyme";
import Card from "./../Card";

describe("Card", () => {
  let wrapper;

  beforeEach(
    () =>
      (wrapper = shallow(
        <Card inhabitant={{}} key="" handleSearchFriends={jest.fn()} />
      ))
  );

  it("should render a <div/>", () => {
    expect(wrapper.find("div").length).toEqual(11);
  });

  it("render specific data", () => {
    wrapper.setProps({
      inhabitant: {
        id: 111,
        name: "Bruce Willis",
        age: 112,
        weight: 113,
        height: 114,
        hair_color: "pink",
        professions: ["Artist", "Actor"],
        friends: []
      }
    });
    expect(wrapper.find(".card-id").text()).toEqual("111");
    expect(wrapper.find(".card-name").text()).toEqual("Bruce Willis");
    expect(wrapper.find(".card-age i").text()).toEqual("112");
    expect(wrapper.find(".card-weight i").text()).toEqual("113");
    expect(wrapper.find(".card-height i").text()).toEqual("114");
    expect(wrapper.find(".card-hair_color i").text()).toEqual("pink");
    expect(wrapper.find(".card-professions i").text()).toEqual("Artist, Actor");
    expect(wrapper.find(".card-friends i").text()).toEqual("");
  });
});
