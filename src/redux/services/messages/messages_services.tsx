import { ApolloError, useApolloClient, useSubscription } from '@apollo/client';
import { CREATE_MESSAGE, MESSAGES_SUBSCRIPTION } from './messages_queries';
import { CreateMessageResponse, NewMessageResponse } from '../../types/Messages';
import { useDispatch } from 'react-redux';
import { addMessage, clearState } from '../../slices/messages/messages';
import { activityFinished, activityStarted, setError } from '../../slices/activity/activity';
import { GraphQLErrors } from '@apollo/client/errors';

const useMessagesService = () => {
  const client = useApolloClient();
  const dispatch = useDispatch();

  const createMessageService = (input: CreateMessageResponse): Promise<any> => {
    return client
      .mutate({
        mutation: CREATE_MESSAGE,
        variables: {
          createMessageInput: {
            ...input
          }
        }
      }).catch((error: ApolloError) => {
        dispatch(setError({
          message: error.message,
          title: 'Error'
        }));
        console.log(error);
        return error;
      })
  };

  const messagesSubscription = (topic: string) => {
    const sub = client.subscribe({
      query: MESSAGES_SUBSCRIPTION,
      variables: { topic },

    });
    return sub.subscribe({
      next({ data, errors }) {
        if (data) {
          const d = data.newMessage;
          const room = {roomId: topic, message: { ...d }}
          dispatch(addMessage(room));
        }
        if (errors) {
          dispatch(setError({
            message: errors[0].message,
            title: 'Error'
          }));
        }
      },
      error(error) {
        dispatch(setError({
          message: error.message,
          title: 'Error'
        }));
        console.log('Error: ', error)
      }
    })
  }


  return { createMessageService, messagesSubscription };
};

export default useMessagesService;
