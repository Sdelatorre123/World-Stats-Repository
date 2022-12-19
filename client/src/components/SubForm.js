import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_THREAD } from '../utils/mutations';
import { QUERY_THREAD } from '../utils/queries';
import { Form, Button } from 'react-bootstrap';

const SubForm = () => {
  const [formState, setFormState] = useState({
    thoughtText: '',
    thoughtAuthor: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  const [addThread, { error }] = useMutation(ADD_THREAD, {
    // All returning data from Apollo Client queries/mutations return in a `data` field, followed by the the data returned by the request
    update(cache, { data: { addThread } }) {
      try {
        const { threads } = cache.readQuery({ query: QUERY_THREAD });

        cache.writeQuery({
          query: QUERY_THREAD,
          data: { threads: [addThread, ...threads] },
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
        threadText: '',
        threadAuthor: '',
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
    } else if (name !== 'threadText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
     <h1>Payment Form</h1>
     <Form>
     <Form.Group className="mb-3" controlId="formBasiCreditCard">
        <Form.Label>Credit Card #</Form.Label>
        <Form.Control type="input" placeholder="Enter Credit Card" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
     <p
        className={`m-0 ${
          characterCount === 280 || error ? 'text-danger' : ''
        }`}
      >
        
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">

        </div>
        <div className="col-12 col-lg-9">
          
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
          </div>
        )}
      </form>
    </div>
  );
};

export default SubForm;