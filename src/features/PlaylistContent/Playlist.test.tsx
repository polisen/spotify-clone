import React from "react";
import { render, screen } from "utility/test-utility";
import userEvent from '@testing-library/user-event'
import { Playlist } from "./Playlist";

describe("Playlist", () => {
  test("", () => {
    render(<Playlist />);
    const index = screen.getByText("#");
    const title = screen.getByText("TITLE");
    const album = screen.getByText("ALBUM");
    const date = screen.getByText("DATE ADDED");
    expect(index).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(album).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });
});
