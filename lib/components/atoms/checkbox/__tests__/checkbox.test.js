import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Checkbox from '../';

const handleClick = jest.fn();

describe('<Button />', () => {
  test('renders', () => {
    const { container } = render(<Checkbox id="0" isChecked onChandleChangelick={handleClick} />);
    expect(container).toBeTruthy();
  });
});
