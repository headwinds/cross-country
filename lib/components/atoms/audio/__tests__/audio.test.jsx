import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, beforeEach, it } from 'vitest';
import Audio from '../';

describe('<Audio />', () => {
  test('renders', () => {
    const { container } = render(<Audio url={'https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_500KB_MP3.mp3'} />);
    expect(container).toBeTruthy();
  });
});
