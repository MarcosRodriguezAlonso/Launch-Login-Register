export const isValidUsername = (username) => {
  const isValid = username.length >= 5;

  return isValid;
};

export const isValidPassword = (password) => {
  const isValid =
    password.toLowerCase() !== password &&
    (password.length = 8) &&
    /(\d)/.test(password);

  return isValid;
};

export const isSamePassword = (password1, password2) => {
  const isSame = password1 === password2;

  return isSame;
};

export const isAdultAge = (age) => {
  const isAdult = age >= 18;

  return isAdult;
};
