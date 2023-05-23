import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

//smoke test
it("renders without crashing", function () {
  render(
    <Card caption="testing image 1" src="test1.com" currNum="1" totalNum="3" />
  );
});

//snapshot test
it("matches snapshot", function () {
  const { container } = render(
    <Card caption="testing image 1" src="test1.com" currNum="1" totalNum="3" />
  );
  expect(container).toMatchSnapshot();
});
