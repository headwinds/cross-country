import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../button-themed';

const handleClick = jest.fn();

describe('<Button />', () => {
  test('renders', () => {
    const { container } = render(<Button text="hello" handleClick={handleClick} />);
    expect(container).toBeTruthy();
  });

  test('click the button', () => {
    const { container, debug } = render(<Button text="hello" handleClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('press down', () => {
    const { container, debug } = render(<Button text="hello" handleClick={handleClick} />);
    const button = screen.getByRole('button');
    fireEvent.keyDown(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
