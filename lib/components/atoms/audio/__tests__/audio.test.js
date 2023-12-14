import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, beforeEach, it } from 'vitest';
import Audio from '../';

describe.skip('<Audio />', () => {
  test('renders', () => {
    const { container } = render(<Audio url={''} />);
    expect(container).toBeTruthy();
  });
});
