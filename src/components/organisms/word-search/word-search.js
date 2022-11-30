import React, { useEffect } from 'react';
import { Image, Column, SubHeadline } from '../../';
import styles from './word-search.scss';
import { wordleSearchMachine } from './wordle-search-machine';
//import { searchMachine } from './search-machine';
import { useMachine, useInterpret, useSelector } from '@xstate/react';
import { WordleHero } from './wordle-hero';
import clsx from 'clsx';

const WordSearch = ({ config: { text, hasBackground } }) => {
  const [current, send] = useMachine(wordleSearchMachine);
  const { context } = current;
  const { wordleService, wordleServices } = context;

  const posts = [{ author: 'Princess Rhaenyra Targaryen', title: 'test', id: 'test' }];

  const firstPost = posts?.[0] ?? { id: 0 };
  const author = posts?.[0]?.author ?? 'Princess Rhaenyra Targaryen';

  useEffect(() => {
    console.log('WordSearch -> useEffect - context: ', context);
  }, [context]);

  return (
    <Column hasBackground={hasBackground}>
      <SubHeadline text={`${text} ${author}`} />
      {wordleService && <WordleHero service={wordleService} key={wordleService.id} />}
    </Column>
  );
};

export default WordSearch;
