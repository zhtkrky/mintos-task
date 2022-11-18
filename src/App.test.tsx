import { render, fireEvent, screen } from "@testing-library/react";

import App from "./App";

test("renders app component", () => {
  render(<App />);
});

// A test to check if our toggleCurrency function works
test("toggleCurrency function", () => {
  render(<App />);
  const button = screen.getByText("USD");
  fireEvent.click(button);
  expect(button).toHaveClass("input-wrapper-checked");
  fireEvent.click(button);
  expect(button).not.toHaveClass("input-wrapper-checked");
});
