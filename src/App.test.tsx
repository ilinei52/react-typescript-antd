import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// // TODO: 'matchMedia' move to file like this:https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: function () { },
    removeListener: function () { }
  };
};

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
