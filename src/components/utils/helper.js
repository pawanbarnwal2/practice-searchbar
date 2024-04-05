export const validateForm = (formData) => {
  let error = {};
  if (isEmpty(formData.username)) {
    error.username = "Add username data";
  }
  if (isEmpty(formData.password) || isValidPassword(formData.password)) {
    error.username = "Add password data";
  }
};

const isEmpty = (data) => {
  if (data.trim() === "") return true;
  return false;
};
const isValidPassword = (data) => {
  const psswdRegex =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";
  if (!data.password.match(psswdRegex)) {
    return false;
  }
  return true;
};
