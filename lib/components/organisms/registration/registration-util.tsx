export const validateEmail = (candidateEmail: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(candidateEmail);
};

export const validateUsername = (candidateUsername: string) => {
  const usernameRegex = /^[a-zA-Z0-9_]{3,30}$/;
  const hasMinimumLength = candidateUsername.length >= 1;
  return usernameRegex.test(candidateUsername) && hasMinimumLength;
};

export const validatePasswordHasUpperCase = (candidatePassword: string) => {
  return /[A-Z]/.test(candidatePassword);
};

export const validatePasswordHasLowerCase = (candidatePassword: string) => {
  return /[a-z]/.test(candidatePassword);
};

export const validatePasswordHasNumber = (candidatePassword: string) => {
  return /[0-9]/.test(candidatePassword);
};

export const validatePasswordHasSpecialCharacter = (
  candidatePassword: string
) => {
  return /[^A-Za-z0-9]/.test(candidatePassword);
};

export const validatePasswordMinimumLength = (candidatePassword: string) => {
  return candidatePassword.length >= 8;
};

// rules:
// 8 characters
// 1 uppercase
// 1 lowercase
// 1 number
// 1 special character
export const validatePassword = (candidatePassword: string) => {
  const hasUpperCase = validatePasswordHasUpperCase(candidatePassword);
  const hasLowerCase = validatePasswordHasLowerCase(candidatePassword);
  const hasNumber = validatePasswordHasNumber(candidatePassword);
  const hasSpecialCharacter =
    validatePasswordHasSpecialCharacter(candidatePassword);
  const hasMinimumLength = validatePasswordMinimumLength(candidatePassword);

  return (
    hasUpperCase &&
    hasLowerCase &&
    hasNumber &&
    hasSpecialCharacter &&
    hasMinimumLength
  );
};
