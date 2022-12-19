import { gql } from '@apollo/client';


export const QUERY_THREAD = gql`
  query getThreads {
    threads {
      _id
      threadText
      threadAuthor
      createdAt
    }
  }
`;


export const QUERY_USER = gql`
  {
    user {
      name
      comments {
        _id
        rating
      }
      }
    }
`;

