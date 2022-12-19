import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THREAD } from '../utils/queries';

const Discussion = () => {
  const { loading, data } = useQuery(QUERY_THREAD);
  const threads = data?.threads || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <ThoughtForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              threads={threads}
              title="Messi Reall the goat Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Discussion;
