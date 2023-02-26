import * as React from 'react';
import { render } from '@testing-library/react';
import { ImageProps } from '../image.types';
import Image from '../';

describe('<Image />', () => {
  let props: ImageProps;

  beforeEach(() => {
    props = {
      url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      dataTestId: 'image',
    };
  });

  const renderComponent = () => render(<Image {...props} />);

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('image');

    expect(component).toBeTruthy();
  });
});
