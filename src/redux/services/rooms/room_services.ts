import { ApolloError, useApolloClient } from '@apollo/client';
import { GET_ALL_ROOMS } from './room_queries';
import { GET_MESSAGES_BY_ROOMS } from '../messages/messages_queries';
import { useDispatch } from 'react-redux';
import { activityFinished, activityStarted, setError } from '../../slices/activity/activity';

const useRoomsService = () => {
  const client = useApolloClient();
  const dispatch = useDispatch();
  const getAllRoomsService = (): Promise<any> => {
    dispatch(activityStarted());
    return client
      .query({ query: GET_ALL_ROOMS })
      .then(({ data, errors }) => {
        if (data) {
          dispatch(activityFinished());
          return data;
        }
        if (errors) {
          dispatch(setError({
            message: errors[0].message,
            title: 'Error'
          }));
          return errors;
        }
      }).catch((error: ApolloError) => {
        dispatch(setError({
          message: error.message,
          title: 'Error'
        }));
        return error;
      })
  }

  const getMessagesByRoomService = (roomId: string): Promise<any> => {
    dispatch(activityStarted());
    return client
      .query({ query: GET_MESSAGES_BY_ROOMS, variables: { getMessagesByRoomId: roomId } })
      .then(({ data, errors }) => {
        if (data) {
          dispatch(activityFinished());
          return data;
        }
        if (errors) {
          dispatch(setError({
            message: errors[0].message,
            title: 'Error'
          }));
          return errors;
        }
      }).catch((error: ApolloError) => {
        dispatch(setError({
          message: error.message,
          title: 'Error'
        }));
        return error;
      })
  }

  return { getAllRoomsService, getMessagesByRoomService }
}

export default useRoomsService;
