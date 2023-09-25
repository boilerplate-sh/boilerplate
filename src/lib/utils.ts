export const strongPassword = (value: string) => {
  const hasMinLength = value.length >= 6;
  const hasUppercase = /[A-Z]/.test(value);
  const hasLowercase = /[a-z]/.test(value);
  const hasSpecialChar = /[!@#$%^&*()]/.test(value);
  return hasMinLength && hasUppercase && hasLowercase && hasSpecialChar;
};
