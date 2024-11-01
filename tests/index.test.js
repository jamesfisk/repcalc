import { render, screen } from "@testing-library/react";
import Calculator from "../src/app/components/calculator";
import "@testing-library/jest-dom";

describe("Calc", () => {
  it("renders a heading", () => {
    render(<Calculator />);

    const calcheader = screen.getByTestId("calc");

    expect(calcheader).toBeInTheDocument();
  });
});
