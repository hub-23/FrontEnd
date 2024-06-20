// K-Basket
import { useDispatch } from 'react-redux';
import { clearAuthHeader } from '../redux/auth/operations';
import { setReset } from '../redux/auth/slice';

export const useSignout = () => {
  const dispatch = useDispatch();

  const signout = () => {
    dispatch( setReset() );
    clearAuthHeader();
  };

  return signout;
};

// export const useSignout = () => {
//   const dispatch = useDispatch();

//   return {
//     signout: () => {
//       dispatch( setReset( initialState ) );
//       clearAuthHeader();
//     },
//   };
// };
