import { gql } from '@apollo/client';

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
  }
}
`;