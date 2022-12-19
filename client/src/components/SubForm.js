import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Row, Col } from 'react-bootstrap';

import { ADD_THOUGHT } from '../utils/mutations';
import { QUERY_THOUGHTS } from '../utils/queries';
import { Form, Button } from 'react-bootstrap';

const SubForm = () => {
  const [formState, setFormState] = useState({
    thoughtText: '',
    thoughtAuthor: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    // All returning data from Apollo Client queries/mutations return in a `data` field, followed by the the data returned by the request
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
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

    if (name === 'thoughtText' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'thoughtText') {
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
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Row>
        <Col> <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Experation Date </Form.Label>
        <Form.Control type="Experation Date" placeholder="Experation Date" />
      </Form.Group> </Col>
        <Col><Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>CVV #</Form.Label>
        <Form.Control type="CVV #" placeholder="CVV" />
      </Form.Group></Col>
        <Col><Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Zip Code </Form.Label>
        <Form.Control type="Zip Code" placeholder="Zip Code" />
      </Form.Group> </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
        <Form.Check type="checkbox" label="Remember me next time" />
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