import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_THREAD } from '../utils/mutations';
import { QUERY_THREAD } from '../utils/queries';

const ThoughtForm = () => {
  const [formState, setFormState] = useState({
    thoughtText: '',
    thoughtAuthor: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  const [addThread, { error }] = useMutation(ADD_THREAD, {
    // All returning data from Apollo Client queries/mutations return in a `data` field, followed by the the data returned by the request
    update(cache, { data: { addThought } }) {
      try {
        const { threads } = cache.readQuery({ query: QUERY_THREAD });

        cache.writeQuery({
          query: QUERY_THREAD,
          data: { thoughts: [addThought, ...threads] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThread({
        variables: { ...formState },
      });

      setFormState({
        thoughtText: '',
        thoughtAuthor: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'threadText' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'treadText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h3>Lets take World Cup. PS Messi Really the goat?</h3>

      <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="threadText"
            placeholder="Here's a new thread..."
            value={formState.threadText}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="threadAuthor"
            placeholder="Add your name to get credit for the thought..."
            value={formState.threadAuthor}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Add Thread
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default ThoughtForm;