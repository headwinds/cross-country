import React from 'react';
import { render } from '@testing-library/react';

import Span from '../';
import { SpanProps } from '../span.types';

describe('Test Component', () => {
  let props: SpanProps;

  beforeEach(() => {
    props = {
      customStyle: { color: 'teal' },
      dataTestId: 'span-0123',
    };
  });

  const renderComponent = () => render(<Span {...props}>cross country was here</Span>);

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('span-0123');

    expect(component).toHaveTextContent('cross country was here');
  });
});
