import React from 'react';
import { render } from '@testing-library/react';

import Timeseries from '../';
import { TimeseriesProps } from '../timeseries.types';

describe('Test Component', () => {
  let props: TimeseriesProps;

  beforeEach(() => {
    props = {
      foo: 'bar',
    };
  });

  const renderComponent = () => render(<Timeseries {...props} />);

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('timeseries');

    expect(component).toHaveTextContent('timeseries ARIMA');
  });
});
