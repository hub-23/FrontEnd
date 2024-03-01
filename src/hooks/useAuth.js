import { useSelector } from 'react-redux';
import {
  selectIsError,
  selectIsLoading,
  selectIsLoggedIn,
  selectUser,
} from '../redux/auth/selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector( selectIsLoggedIn ),
    user: useSelector( selectUser ),
    isLoading: useSelector( selectIsLoading ),
    isError: useSelector( selectIsError ),
  };
};
