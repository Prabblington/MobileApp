const EMAIL_VALIDATION = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const PASSWORD_VALIDATION =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export { EMAIL_VALIDATION, PASSWORD_VALIDATION };
