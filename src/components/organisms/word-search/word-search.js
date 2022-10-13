import React, { useEffect } from 'react';
import { Image, Column, SubHeadline } from '../../';
import styles from './word-search.scss';
import { wordSearchMachine } from './word-search-machine';
//import { searchMachine } from './search-machine';
import { useMachine, useInterpret, useSelector } from '@xstate/react';
import { Words } from './words';
import clsx from 'clsx';

const WordSearch = ({ config: { text, hasBackground } }) => {
  const [current, send] = useMachine(wordSearchMachine);
  const { context } = current;
  const { subredditService, subredditServices } = context;

  const posts = [{ author: 'test', title: 'test', id: 'test' }];

  const firstPost = posts?.[0] ?? { id: 0 };
  const author = posts?.[0]?.author ?? 'Princess Rhaenyra Targaryen';

  useEffect(() => {
    console.log('WordSearch -> useEffect - did current get subreddit?! ', context);
  }, [context]);

  return (
    <Column hasBackground={hasBackground}>
      <SubHeadline text={`${text} ${author}`} />
      {subredditService && <Words service={subredditService} key={subredditService.id} />}
    </Column>
  );
};

export default WordSearch;
