import React from 'react';
import { Input } from '../../../common/modalElements/Input';
import * as S from './Adress.styled';

export const Adress = ( { errSurname, errName, values } ) => {
  // const [ modalOpen, setModalOpen ] = useState( false );
  // const [ avatar, setAvatar ] = useState( '' );
  // const { user } = useAuth();

  // useEffect( () => {
  //   const storedAvatar = localStorage.getItem( 'student-avatar' ) || user?.avatar;
  //   if ( storedAvatar ) {
  //     setAvatar( storedAvatar );
  //   }
  // }, [ user ] );

  // const handleAvatarReceive = newAvatar => {
  //   setAvatar( newAvatar );
  //   localStorage.setItem( 'student-avatar', newAvatar );
  // };

  return (
    <S.Container>
      <Input
        type="text"
        name="country"
        error={ errSurname }
        // value={ values.country }
        component="teacher"
      />
      <Input
        type="text"
        name="city"
        error={ errName }
        // value={ values.city }
        component="teacher"
      />
            <Input
        type="text"
        name="street"
        error={ errName }
        // value={ values.street }
        component="teacher"
      />
      <Input
      type="text"
      name="time_zone"
      // value={ values.time }
      component="teacher"
    />

    </S.Container>
  );
};
