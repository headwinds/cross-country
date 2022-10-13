import React from 'react';
import { useService } from '@xstate/react';

export const Words = ({ service }) => {
  const [current, send] = useService(service);

  if (current.matches('failure')) {
    return (
      <div>
        Failed to load posts. <button onClick={_ => send('RETRY')}>Retry?</button>
      </div>
    );
  }

  const { subreddit, posts, lastUpdated } = current.context;

  return (
    <section data-machine={service.machine.id} data-state={current.toStrings().join(' ')}>
      {current.matches('loading') && <div>Loading posts...</div>}
      {posts && (
        <>
          <header>
            <h2>{subreddit}</h2>
            <small>
              Last updated: {new Date(lastUpdated).toDateString()}{' '}
              <button onClick={_ => send('REFRESH')}>Refresh</button>
            </small>
          </header>
          <ul>
            {posts.map(post => {
              return <li key={post.id}>{post.title}</li>;
            })}
          </ul>
        </>
      )}
    </section>
  );
};
