import React from 'react';
import { render, screen } from 'utility/test-utility';
import { Header } from './Header';

describe('Header', () => {
  test('should render header', () => {
    render(<Header />);
    const index = screen.getByText('#');
    const title = screen.getByText('TITLE');
    const album = screen.getByText('ALBUM');
    const date = screen.getByText('DATE ADDED');
    expect(index).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(album).toBeInTheDocument();
    expect(date).toBeInTheDocument();
  });
});
