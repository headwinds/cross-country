import React from 'react';
import { render } from '@testing-library/react';

import Home from '../';
import { HomeProps } from '../home.types';

describe('<Home />', () => {
  let props: HomeProps;

  beforeEach(() => {
    const Header = () => (
      <div>
        <h1>Header</h1>
      </div>
    );

    const Hero = () => (
      <div>
        <h1>Hero</h1>
      </div>
    );

    const Footer = () => (
      <div>
        <h1>Footer</h1>
      </div>
    );

    props = {
      header: <Header />,
      hero: <Hero />,
      footer: <Footer />,
    };
  });

  const renderComponent = () => render(<Home {...props} />);

  it('should render foo text correctly', () => {
    const { getByText } = renderComponent();

    const component = getByText('Hero');

    expect(component).toBeDefined();
  });
});
