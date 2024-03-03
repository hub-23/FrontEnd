import { useSelector } from 'react-redux';
import {
  selectIsError,
  selectIsLoading,
  selectIsLoggedIn,
  selectToken,
  selectUser,
} from '../redux/auth/selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector( selectIsLoggedIn ),
    user: useSelector( selectUser ),
    isLoading: useSelector( selectIsLoading ),
    token: useSelector( selectToken ),
    isError: useSelector( selectIsError ),
  };
};
