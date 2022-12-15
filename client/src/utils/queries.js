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
`;