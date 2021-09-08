import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

test('should start with dropdown closed', () => {
  const header = render(<Header />);
  const dropdown = header.queryByTestId('dropdown');

  expect(dropdown).toBe(null);
})

test('should open dropdown when menu button is clicked', () => {
  const header = render(<Header />);
  const menuButton = header.queryByTestId('hamburger-button');
  fireEvent.click(menuButton);
  const dropdown = header.queryByTestId('dropdown');
  expect(dropdown).toBeTruthy();
})