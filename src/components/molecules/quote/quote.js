import React, { Component } from 'react';
import styles from './quote.scss';
import clsx from 'clsx';
import { Column, Paragraph, Link } from '../../';

const Quote = ({ source, text, children, customClass = '', customStyle = {} }) => {
  const { author, work, url } = source;
  const validWork = work && work !== '' ? `, ${work}` : '';
  const credit = `${author}${validWork}`;
  const authorSource = url && url !== '' ? <Link url={url}>{credit}</Link> : <Paragraph>{credit}</Paragraph>;
  return (
    <Column>
      <Paragraph>{text || children}</Paragraph>
      {authorSource}
    </Column>
  );
};

export default Quote;
