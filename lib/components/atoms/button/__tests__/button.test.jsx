import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, beforeEach, it } from 'vitest';
import Button from '../button-themed';
import { vi } from 'vitest';

/*
I had to add config to reset the handleclick function each time
which I expected to work by default 
see clearMocks in jest.config.js 
https://stackoverflow.com/questions/47812801/how-to-reset-jest-mock-functions-calls-count-before-every-test
*/

const handleClick = vi.fn();

describe('<Button />', () => {
  test('renders', () => {
    const { container } = render(<Button text="hello" handleClick={handleClick} />);
    expect(container).toBeTruthy();
  });
  /*
  test('calls handleClick on click', () => {
    const { container } = render(<Button text="hello" handleClick={handleClick} />);
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });*/
});
