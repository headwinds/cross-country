import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Button from '../';

/*
I had to add config to reset the handleclick function each time
which I expected to work by default 
see clearMocks in jest.config.js 
https://stackoverflow.com/questions/47812801/how-to-reset-jest-mock-functions-calls-count-before-every-test
*/

const handleClick = jest.fn();

describe('<Button />', () => {
  test('renders', () => {
    const { container } = render(<Button text="hello" onClick={handleClick} />);
    expect(container).toBeTruthy();
  });

  test('click the button', async () => {
    const { container, debug } = render(<Button text="hulk" onClick={handleClick} />);
    const button = await screen.findByText('hulk');
    fireEvent.click(button);

    await waitFor(() => {
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  test('press down', async () => {
    const { container, debug } = render(<Button text="thor" onClick={handleClick} />);

    const button = await screen.findByText('thor');
    fireEvent.click(button);

    await waitFor(() => {
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
});
