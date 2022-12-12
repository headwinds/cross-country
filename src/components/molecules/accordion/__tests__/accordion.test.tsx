import React from 'react';
import { render } from '@testing-library/react';

import Accordion from '../';
import { AccordionProps } from '../accordion.types';

describe('Test Component', () => {
  let props: AccordionProps;

  beforeEach(() => {
    props = {
      foo: 'bar',
    };
  });

  const renderComponent = () => render(<Accordion {...props} />);

  it('should render foo text correctly', () => {
    props.foo = 'harvey was here';
    const { getByTestId } = renderComponent();

    const component = getByTestId('accordion');

    expect(component).toHaveTextContent('harvey was here');
  });
});
