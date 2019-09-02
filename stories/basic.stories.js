import React from "react";

import { storiesOf } from "@storybook/react";
import App from "./App";

storiesOf("Basic", module).add("Default", () => <App />);
storiesOf("Basic", module).add("Default ratio", () => (
  <App defaultRatio={30} />
));
storiesOf("Basic", module).add("Default left panel width", () => (
  <App defaultLeftWidth={200} />
));
storiesOf("Basic", module).add("Default right panel width", () => (
  <App defaultRightWidth={200} />
));
