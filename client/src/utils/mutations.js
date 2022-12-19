import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_THREAD = gql`
  mutation addThread($threadText: String!, $threadAuthor: String!) {
    addThread(threadText: $threadText, threadAuthor: $threadAuthor) {
      _id
      threadText
      threadAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;
