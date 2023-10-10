import { UserPayloadKey } from '../../../common/emuns/enums.js';

export const DEFAULT_REGISTRATION_PAYLOAD = {
  [ UserPayloadKey.EMAIL ]: '',
  [ UserPayloadKey.PASSWORD ]: '',
  [ UserPayloadKey.ROLE ]: '',
  [ UserPayloadKey.CONFIDENTPOLICY ]: false,
  [ UserPayloadKey.CONFIRMPASSWORD ]: '',
};


export const RADIO_OPTIONS = [
  { value: 'teacher', label: 'Я викладач' },
  { value: 'student', label: 'Я учень' },
];

