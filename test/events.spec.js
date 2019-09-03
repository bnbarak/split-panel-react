import { mount } from "enzyme/build/index";
import Container from "../src/Container";
import React from "react";
import Divider from "../src/Divider";
import { expect } from "chai";
import { isTrue } from "./helpers/utils";

describe("events", () => {
  describe("onMouseDown for Divider", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Container style={{width: '200px'}}>
          <div>a</div>
          <div>b</div>
        </Container>,
      );
      wrapper.instance().handleResize(100);
      wrapper.update();
    });

    it("should click on the divider", () => {
      wrapper
        .find(Divider)
        .last()
        .simulate("mouseDown");
      const containerState = wrapper.state();
      const { isDrag } = containerState;
      isTrue(isDrag);
    });
  });
});
