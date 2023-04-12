import { render, screen } from "@testing-library/react";
import Home from "./page";

test("renders default text", () => {
  render(<Home />);
  const paragraphElement = screen.getByText(/stuff/i);
  expect(paragraphElement).toBeInTheDocument();
});
