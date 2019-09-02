import React from "react";

import { storiesOf } from "@storybook/react";
import App from "./App";

const containerStyle = {
  height: "200px",
  border: "1px solid #e0e0e0",
  boxShadow: "0px 0px 6px -3px #8483DB"
};

const dividerStyle = {
  background: "#ff90f9",
  width: "2px"
};

const constraints = {
  leftMaxWidth: 700,
  leftMinWidth: 100,
  rightMaxWidth: 700,
  rightMinWidth: 50,
  defaultLeftWidth: 600
};

const props = {
  ...constraints,
  containerStyle,
  dividerStyle
};

storiesOf("Example", module).add("Example", () => <App {...props} />);
