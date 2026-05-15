const USER_CONSTANTS = require("./user.constant");
const userService = require("./user.service");

exports.signUpUser = async (req, res, next) => {
  try {
    const payload = req.body;
    const result = await userService.signUp(payload);

    return res.status(201).json({
      success: true,
      message: USER_CONSTANTS.LOGIN_MESSAGES.REGISTRATION_SUCCESS,
      data: result,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: USER_CONSTANTS.LOGIN_MESSAGES.REGISTRATION_FAILURE,
    });
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const payload = req.body;
    const result = await userService.login(payload);

    return res.status(200).json({
      success: true,
      message: USER_CONSTANTS.LOGIN_MESSAGES.LOGIN_SUCCESS,
      data: result,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: USER_CONSTANTS.LOGIN_MESSAGES.LOGIN_FAILURE,
    });
  }
};
