import { useDispatch } from 'react-redux';
import { clearAuthHeader } from '../redux/auth/operations';
import { initialState, setReset } from '../redux/auth/slice';

export const signout = () => {
  const dispatch = useDispatch();

  dispatch( setReset( initialState ) );
  clearAuthHeader();
  return;
};
