import React from "react";
import { render, screen } from "@testing-library/react";
import { GreenButtonBar } from "./GreenButtonBar";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

test("renders control bar and tests the button", () => {
  render(<GreenButtonBar />);
  const button = screen.getByRole("button");
  const play = screen.getByRole("pausebutton");
  expect(button).toBeInTheDocument();
  expect(play).toBeInTheDocument();
  userEvent.click(button);
  const pause = screen.getByRole("playbutton");
  expect(pause).toBeInTheDocument();
});
