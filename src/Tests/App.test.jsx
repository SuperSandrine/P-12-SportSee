import { render, screen } from '@testing-library/react';
import { expect } from 'vitest';
import { describe, it } from 'vitest';
import App from '../App.jsx';
//suite
describe('App', () => {
  it('Renders hello World', () => {
    //arrange
    render(<App />);
    //act
    //expect
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
});
