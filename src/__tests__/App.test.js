import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";


test("displays an image with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/profile/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with the text `About Me`", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(heading).toBeInTheDocument();
});
