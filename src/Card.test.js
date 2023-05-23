import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

//smoke test
it("renders without crashing", function () {
  render(
    <Card
      caption="Photo by Richard Pasquarella on Unsplash"
      src="image1"
      currNum="1"
      totalNum="3"
    />
  );
});

//snapshot test
it("matches snapshot", function () {
  const { container } = render(
    <Card
      caption="Photo by Richard Pasquarella on Unsplash"
      src="image1"
      currNum="1"
      totalNum="3"
    />
  );
  expect(container).toMatchSnapshot();
});
