const { validateFormData } = require("../functions");

function contactController(req, res) {
  //Extrat the required data from body
  const { fullName, email, message } = req.body;

  const { isValid, errorMessage } = validateFormData({
    fullName,
    email,
    message,
  });

  //send appropriate message if validation was not successful
  if (!isValid) {
    return res.status(400).json({ success: false, message: errorMessage });
  }

  //Logging of the data
  console.log({
    fullName,
    email,
    message,
  });

  //send successfull response
  res.json({ success: true, message: "Message sent successfully." });
}

module.exports = {
  contactController,
};
