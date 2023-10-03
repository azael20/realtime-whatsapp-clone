import { gql } from '@apollo/client';

export const GET_MESSAGES_BY_ROOMS = gql`
  query GetMessagesByRoom($getMessagesByRoomId: String!) {
    getMessagesByRoom(id: $getMessagesByRoomId) {
      _id
      files
      isMedia
      text
      user {
        _id
        username
      }  
    }
  }
`;

export const MESSAGES_SUBSCRIPTION = gql`
  subscription Subscription($topic: String!) {
    newMessage(topic: $topic) {
      text
      files
      isMedia
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($createMessageInput: CreateMessageInput!) {
  createMessage(createMessageInput: $createMessageInput) {
    _id
    text
    files
    isMedia
  }
}
`;
