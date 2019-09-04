import React from "react";

import { storiesOf } from "@storybook/react";
import App from "./App";

storiesOf("Constrains", module).add("Left max width", () => (
  <App leftMaxWidth={200} defaultLeftWidth={100} />
));

storiesOf("Constrains", module).add("Right max width", () => (
	<App rightMaxWidth={200} defaultRightWidth={100} />
));

storiesOf("Constrains", module).add("Min and max width", () => (
	<App rightMaxWidth={500} rightMinWidth={200} defaultRightWidth={300} />
));


storiesOf("Constrains", module).add("Max ratio", () => (
	<App maxRatio={60} />
));

storiesOf("Constrains", module).add("Min ratio", () => (
	<App minRatio={60} defaultRatio={70}/>
));
