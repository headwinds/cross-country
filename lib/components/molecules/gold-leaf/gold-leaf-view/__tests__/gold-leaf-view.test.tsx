import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, beforeEach, it } from 'vitest';
import GoldLeafView from '../';
import { GoldLeafViewProps } from '../gold-leaf-view.types';
import { getGoldLeafModel } from '../__stories__/gold-leaf-view-story';

describe('Test Component', () => {
  let props: GoldLeafViewProps;

  beforeEach(() => {
    props = {
      goldLeafModel: getGoldLeafModel(),
    };
  });

  const renderComponent = () => render(<GoldLeafView {...props} />);

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('golf-leaf-view');

    expect(component).toBeDefined();
  });
});
