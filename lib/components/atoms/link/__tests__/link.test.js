import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, beforeEach, it } from 'vitest';
import Link from '../link';

describe('<Link />', () => {
  test('renders', () => {
    const { container } = render(<Link url="http://www.roguebasin.com/index.php?title=Cogmind">Cogmind</Link>);
    expect(container).toBeTruthy();
  });
});
