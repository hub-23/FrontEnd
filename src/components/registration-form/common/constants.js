import { UserPayloadKey } from '../../../common/emuns/enums.js';

const DEFAULT_REGISTRATION_PAYLOAD = {
  [ UserPayloadKey.EMAIL ]: '',
  [ UserPayloadKey.PASSWORD ]: '',
  [ UserPayloadKey.ROLE ]: 'Я учень',
  // [ UserPayloadKey.CONFIRMPASSWORD ]: '',
};

export default DEFAULT_REGISTRATION_PAYLOAD;
