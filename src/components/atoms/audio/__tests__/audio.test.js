import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Audio from '../';

describe('<Audio />', () => {
  test('renders', () => {
    const { container } = render(<Audio url={''} />);
    expect(container).toBeTruthy();
  });
});
