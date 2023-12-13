import * as React from 'react';
import { Column, Row, Paragraph, Image, Link } from '../../../../';
import Span from '../span';
import img from './jane.png';

const SpanRow = ({ children }) => (
  <Row customStyle={{ alignItems: 'flex-end', justifyContent: 'space-between', padding: 0 }}>{children}</Row>
);

const SpanStory = () => {
  const keyStyle = { color: '#999', fontSize: 12, margin: '0px 4px' };
  const valueStyle = { color: 'olive', fontSize: 16, padding: 0, margin: 0 };

  return (
    <Column customStyle={{ padding: 26, width: 250 }}>
      <Image url={img} width={200} a11y="Dr. Jane Goodall" />
      <SpanRow>
        <Span customStyle={keyStyle}>name </Span>
        <Paragraph customStyle={valueStyle}>Dr. Jane Goodall</Paragraph>
      </SpanRow>
      <SpanRow>
        <Span customStyle={keyStyle}>profession </Span>
        <Paragraph customStyle={valueStyle}>Anthropologist</Paragraph>
      </SpanRow>
      <SpanRow>
        <Span customStyle={keyStyle}>link </Span>
        <Paragraph customStyle={valueStyle}>
          <Link url="https://janegoodall.ca/">janegoodall.ca</Link>
        </Paragraph>
      </SpanRow>
    </Column>
  );
};

export default SpanStory;
