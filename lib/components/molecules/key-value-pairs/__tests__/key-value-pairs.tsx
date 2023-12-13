import React from 'react';
import { render } from '@testing-library/react';

import KeyValuePairs from '../';
import { KeyValuePairsProps } from '../key-value-pairs.types';

describe('<KeyValuePairs />', () => {
  let props: KeyValuePairsProps;

  beforeEach(() => {
    props = {
      dataTestId: 'key-value-pairs',
      keyValues: [
        { id: 0, key: 'name', value: 'Matthew Pocock' },
        { id: 1, key: 'profession', value: 'Typescript Wizard' },
      ],
    };
  });

  const renderComponent = () => render(<KeyValuePairs {...props} />);

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('key-value-pairs');

    expect(component).toBeDefined();
  });
});
