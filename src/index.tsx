import React, { Component } from 'react';
import Documentation from './documentation';
import World from './world';
import ReadMe from './readme';
import { Column, SubHeadline, Paragraph } from './components';

export * from './components';
export * from './utils';

export default function CrossCountry() {
  const selected = 'documentation';
  function renderChoose(selected) {
    switch (selected) {
      case 'world':
        return <World />;
      case 'documentation':
        return (
          <Column>
            <Documentation name="documentation" />
            <SubHeadline text="Try Me" size="large" />
            <ReadMe />
          </Column>
        );
    }
  }

  return <Column hasBackground={false}>{renderChoose(selected)}</Column>;
}
