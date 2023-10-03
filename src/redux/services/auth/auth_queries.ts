import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      username
    }
  }
`;
