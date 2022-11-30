import React from 'react';
import { useService } from '@xstate/react';

export const WordleHero = ({ service }) => {
  const [current, send] = useService(service);

  if (current.matches('failure')) {
    return (
      <div>
        Failed to load words. <button onClick={_ => send('RETRY')}>Retry?</button>
      </div>
    );
  }

  const { wordleQuery, words, lastUpdated, totalWords } = current.context;

  return (
    <section data-machine={service.machine.id} data-state={current.toStrings().join(' ')}>
      {current.matches('loading') && <div>Loading posts...</div>}
      {words && (
        <>
          <h2>
            Page {wordleQuery.page} | {new Date(lastUpdated).toDateString()} | {words.length} | {totalWords}
          </h2>
          <ul>
            {words.map((word, idx) => {
              return <li key={idx}>{word}</li>;
            })}
          </ul>
        </>
      )}
    </section>
  );
};
