import Joi from 'joi';
import {
  UserPayloadKey,
  UserValidationMessage,
  UserValidationRule,
} from '../../common/emuns/enums.js';

const registration = Joi.object( {
  [ UserPayloadKey.EMAIL ]: Joi.string()
      .trim()
      .email( { tlds: { allow: false } } )
      .required()
      .messages( {
        'string.email': UserValidationMessage.EMAIL_WRONG,
        'any.required': UserValidationMessage.EMAIL_REQUIRE,
        'string.empty': UserValidationMessage.EMAIL_REQUIRE,
      } ),
  [ UserPayloadKey.PASSWORD ]: Joi.string()
      .trim()
      .min( UserValidationRule.PASSWORD_MIN_LENGTH )
      .max( UserValidationRule.PASSWORD_MAX_LENGTH )
      .required()
      .messages( {
        'string.empty': UserValidationMessage.PASSWORD_REQUIRE,
        'any.required': UserValidationMessage.PASSWORD_REQUIRE,
        'string.min': UserValidationMessage.PASSWORD_MIN_LENGTH,
        'string.max': UserValidationMessage.PASSWORD_MAX_LENGTH,
      } ),
  [ UserPayloadKey.ROLE ]: Joi.any()
      .required(),
  // [ UserPayloadKey.CONFIRMPASSWORD ]: Joi.any()
  //     .valid( Joi.ref( UserPayloadKey.PASSWORD ) )
  //     .required()
  //     options({ messages: { 'any.only': '{{#label}} does not match'} }),
} );


export { registration };
