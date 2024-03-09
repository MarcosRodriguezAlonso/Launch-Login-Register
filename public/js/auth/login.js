export const checkCredentials = (username, password) => {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  let areValidCredentials;
  if (username === storedUsername && password === storedPassword)
    areValidCredentials = true;
  else areValidCredentials = false;
  return areValidCredentials;
};
