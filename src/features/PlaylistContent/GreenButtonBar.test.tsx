import React from "react";
import { render, screen } from "utility/test-utility";
import userEvent from '@testing-library/user-event'
import { GreenButtonBar } from "./GreenButtonBar";

describe("GreenButtonBar", () => {
  test("should render green button isPlaying should change on click", () => {
    render(<GreenButtonBar />);
    const button = screen.getByRole("button");
    const play = screen.getByRole("playbutton");
    expect(button).toBeInTheDocument();
    expect(play).toBeInTheDocument();
    userEvent.click(button);
    const pause = screen.getByRole("pausebutton");
    expect(pause).toBeInTheDocument();
  });
});
