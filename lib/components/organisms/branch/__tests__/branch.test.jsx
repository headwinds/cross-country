import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Branch from '../';
import { branchMock } from '../__mocks__/branch-mock';
import { vi } from 'vitest';

const handleClick = vi.fn();

describe('<Branch />', () => {
  test('renders', () => {
    const { container } = render(<Branch branch={branchMock} />);
    expect(container).toBeTruthy();
  });
});
