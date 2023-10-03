import { useApolloClient } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { login } from '../../slices/auth/auth';
import { LOGIN } from './auth_queries';
import { AuthState } from '../../types/Auth';
import { activityFinished, activityStarted, setError } from '../../slices/activity/activity';

const useAuthServices = () => {
  const client = useApolloClient();
  const dispatch = useDispatch();

  const loginService = (input: AuthState): Promise<any> => {
    dispatch(activityStarted());
    return client.mutate({
      mutation: LOGIN,
      variables: {
        createUserInput: {
          ...input
        }
      }
    }).then(({ data, errors }) => {
      if (data) {
        dispatch(activityFinished());
        dispatch(login({ id: data.createUser._id, username: data.createUser.username }));
        return data;
      }
      if (errors) {
        dispatch(setError({
          message: errors[0].message,
          title: 'Error'
        }));
        console.log(errors);
        return errors;
      }
    }).catch(error => {
      dispatch(setError({
        message: error.message,
        title: 'Error'
      }));
      console.log(error);
      return error;
    });
  };

  return {
    loginService
  };

};

export default useAuthServices;
