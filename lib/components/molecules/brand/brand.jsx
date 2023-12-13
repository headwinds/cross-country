import React from 'react';
import { Column, Headline, SubHeadline } from '../../';

const subHeadlineStyle = { position: 'absolute', top: 60, left: 90, color: '#386775' };

const Brand = ({}) => (
  <Column>
    <Headline text="Cross-Country" color="#0cb4b4" />
    <SubHeadline text="Design System" size="medium" customStyle={subHeadlineStyle} />
  </Column>
);

export default Brand;
