import React from "react";
import { expect } from "chai";
import { shallow, mount } from "enzyme";
import { spy } from "sinon";
import Container from "../src/Container";
import { isTrue } from "./helpers/utils";
import Panels from "../src/Panels";

spy(Container.prototype, "render");

const containerWidth = 100;

describe("<Container />", () => {
  describe("Initial state", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(
        <Container>
          <div>a</div>
          <div>b</div>
        </Container>
      );
    });

    it("should call the component", () => {
      isTrue(Container.prototype.render.callCount === 1);
    });

    it("should not render the panels until it has the container width", () => {
      expect(wrapper.find(Panels)).to.have.length(0);
    });

    describe("Initial ratio", () => {
      it(`should have a ration of half the container by default`, () => {
        wrapper.instance().defaultState(containerWidth);
        beforeEach(() => wrapper.update());
        const state = wrapper.state();
        const { ratio } = state;
        isTrue(ratio === containerWidth / 2);
      });
    });
  });
});
