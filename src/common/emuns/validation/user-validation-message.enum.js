/* eslint-disable max-len */
import { UserValidationRule } from './user-validation-rule.enum.js';

const UserValidationMessage = {
  EMAIL_REQUIRE: 'Email є обовя\'зковим',
  EMAIL_WRONG: 'Email неправильний',
  PASSWORD_REQUIRE: 'Пароль є обовя\'зковим',
  CONFIRM_PASSWORD_REQUIRE: 'Підтвердження паролю є обовя\'зковим',
  PASSWORD_WRONG: 'Пароль неправильний',
  PASSWORD_MIN_LENGTH: `Пароль повинен бути як мінімум ${UserValidationRule.PASSWORD_MIN_LENGTH} символів довжиною`,
  PASSWORD_MAX_LENGTH: `Пароль повинен бути максимум ${UserValidationRule.PASSWORD_MAX_LENGTH} символів довжиною`,
  STRING_PATTERN: `Більше ${UserValidationRule.PASSWORD_MIN_LENGTH} символів, велика літера, цифри і спеціальний знак`,
  CONFIRM_PASSWORD_MATCH: 'Підтвердження паролю та пароль повинні співпадати',
};

export { UserValidationMessage };
