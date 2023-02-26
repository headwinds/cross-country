import * as React from 'react';
import { render } from '@testing-library/react';
import { ColumnProps } from '../column.types';
import Column from '../column';

describe('<Column />', () => {
  let props: ColumnProps;

  beforeEach(() => {
    props = {
      dataTestId: 'column',
    };
  });

  const renderComponent = () => render(<Column {...props} />);

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('column');

    expect(component).toBeTruthy();
  });
});
