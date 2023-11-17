import { UserPayloadKey } from '../enums/enums.js';

export const DEFAULT_REGISTRATION_PAYLOAD = {
  [ UserPayloadKey.EMAIL ]: '',
  [ UserPayloadKey.PASSWORD ]: '',
  [ UserPayloadKey.ROLE ]: 'student',
  [ UserPayloadKey.CONFIDENTPOLICY ]: false,
  [ UserPayloadKey.CONFIRMPASSWORD ]: '',
  [ UserPayloadKey.RECAPTCHA ]: false,
};


export const RADIO_OPTIONS = [
  { value: 'teacher', label: 'Я викладач' },
  { value: 'student', label: 'Я учень' },
];

