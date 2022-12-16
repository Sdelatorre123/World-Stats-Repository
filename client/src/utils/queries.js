import { gql } from '@apollo/client';


export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
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

