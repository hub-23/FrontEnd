// K-Basket
import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { AvatarPhoto } from './AvatarPhoto';
import { AvatarLeters } from './AvatarLeters';

export const Avatar = () => {
  const { user } = useAuth();

  return user.avatar ? <AvatarPhoto /> : <AvatarLeters />;
};
