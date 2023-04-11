const EMAIL_VALIDATION = /^\[A-z\][A-z0-9-_]{3,23}$/;
const PASSWORD_VALIDATION =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export { EMAIL_VALIDATION, PASSWORD_VALIDATION };
