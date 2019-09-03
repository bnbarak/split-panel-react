import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import Container from "../src/Container";
import Divider from "../src/Divider";
import Panels from "../src/Panels";

const LeftChild = () => <div>left</div>;
const RightChild = () => <div>right</div>;

describe("<Panels />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Panels children={[<LeftChild />, <RightChild />]} ratio={50} />
    );
  });

  it("should render the left child", () => {
    expect(wrapper.find(LeftChild)).to.have.length(1);
  });

  it("should render the right child", () => {
    expect(wrapper.find(RightChild)).to.have.length(1);
  });

  it("should render the divider", () => {
    expect(wrapper.find(Divider)).to.have.length(1);
  });
});
