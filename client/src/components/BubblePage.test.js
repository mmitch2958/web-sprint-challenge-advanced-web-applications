import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

const colorsData = [

  
]


test("Fetches data and renders the bubbles", () => {
  // Finish this test
  const { rerender } = render(<BubblePage colors={[]} />);
  let colorsArr = screen.queryAllByTestId(/colors/i);
  expect(colorsArr).toHaveLength(0);
});
