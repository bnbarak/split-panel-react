import React from "react";

import { storiesOf } from "@storybook/react";
import App from "../src/App";

storiesOf("Style", module).add("Height", () => <App height={"200px"} />);

storiesOf("Style", module).add("Container", () => (
  <App
    containerStyle={{
      height: "100px",
      border: "1px solid red",
      margin: "10px 75px"
    }}
  />
));

storiesOf("Style", module).add("Divider", () => (
  <App
    dividerStyle={{
      background: "red",
      width: "4px",
      cursor: "-webkit-zoom-out"
    }}
  />
));
