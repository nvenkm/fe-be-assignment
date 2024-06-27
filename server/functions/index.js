function validateFormData(formData) {
  //Check for empty fields
  if (
    !formData.fullName.trim().length ||
    !formData.email.trim().length ||
    !formData.message.trim().length
  ) {
    return { isValid: false, errorMessage: "Please fill in all fields" };
  }

  //Check for input lengths
  if (formData.fullName.trim().length > 50) {
    return { isValid: false, errorMessage: "Name is too long" };
  }

  if (formData.email.trim().length > 25) {
    return { isValid: false, errorMessage: "Email is too long" };
  }

  if (formData.message.trim().length > 400) {
    return { isValid: false, errorMessage: "Message is too long" };
  }

  //Valid email checks
  if (!formData.email.includes("@") || !formData.email.includes(".")) {
    return { isValid: false, errorMessage: "Please enter a valid email" };
  }

  return { isValid: true, errorMessage: "" };
}

module.exports = {
  validateFormData,
};
