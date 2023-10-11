import Joi from 'joi';
import {
  UserPayloadKey,
  UserValidationMessage,
  UserValidationRule,
} from '../../common/enums/enums.js';

const regExp = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{9,}$/;

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
      .regex( regExp )
      .min( UserValidationRule.PASSWORD_MIN_LENGTH )
      .max( UserValidationRule.PASSWORD_MAX_LENGTH )
      .required()
      .messages( {
        'string.empty': UserValidationMessage.PASSWORD_REQUIRE,
        'any.required': UserValidationMessage.PASSWORD_REQUIRE,
        'string.min': UserValidationMessage.PASSWORD_MIN_LENGTH,
        'string.max': UserValidationMessage.PASSWORD_MAX_LENGTH,
        'string.pattern.base': UserValidationMessage.STRING_PATTERN,
      } ),
  [ UserPayloadKey.ROLE ]: Joi.string()
      .trim()
      .required(),
  [ UserPayloadKey.CONFIDENTPOLICY ]: Joi.boolean()
      .invalid( false )
      .required()
      .messages( {
        'any.invalid': UserValidationMessage.CONFIDENT_POLICY,
        'any.required': UserValidationMessage.CONFIRM_PASSWORD_REQUIRE,
      } ),
  [ UserPayloadKey.CONFIRMPASSWORD ]: Joi.string()
      .trim()
      .valid( Joi.ref( UserPayloadKey.PASSWORD ) )
      .required()
      .messages( {
        'any.only': UserValidationMessage.CONFIRM_PASSWORD_MATCH,
        'any.required': UserValidationMessage.CONFIRM_PASSWORD_REQUIRE,
      } ),
} );


export { registration };
