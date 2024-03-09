export const isValidUsername = (username) => {
  let isValid;
  if (username.length >= 5) isValid = true;
  else isValid = false;
  return isValid;
};

export const isValidPassword = (password) => {
  let isValid;
  if (
    /.{8,}/.test(password) &&
    /(?:[A-Z])/.test(password) &&
    /(?:\d)/.test(password)
  )
    isValid = true;
  else isValid = false;
  return isValid;
};

export const isSamePassword = (password1, password2) => {
  let isSame;
  if (password1 === password2) isSame = true;
  else isSame = false;
  return isSame;
};

export const isAdultAge = (age) => {
  let isAdult;
  if (age >= 18) isAdult = true;
  else isAdult = false;
  return isAdult;
};
