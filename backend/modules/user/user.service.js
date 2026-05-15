const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

const USER_CONSTANTS = require("./user.constant");
const userRepository = require("./user.repository");

//signup function
exports.signUp = async (payload) => {
  const existingUser = await userRepository.findByPhoneNumber(
    payload.phoneNumber,
  );
  if (existingUser) {
    throw new Error(USER_CONSTANTS.LOGIN_MESSAGES.USER_EXISTS);
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const user = await userRepository.create({
    ...payload,
    password: hashedPassword,
  });

  //   const token = jsonwebtoken.sign(
  //     { userId: user.id, role: user.role },
  //     process.env.JWT_SECRET,
  //     { expiresIn: "1h" },
  //   );

  return {
    user: user,
    message: USER_CONSTANTS.LOGIN_MESSAGES.REGISTRATION_SUCCESS,
  };
};

//login function
exports.login = async (payload) => {
  const user = await userRepository.findByPhoneNumber(payload.phoneNumber);

  if (!user) {
    throw new Error(USER_CONSTANTS.LOGIN_MESSAGES.INVALID_CREDENTIALS);
  }

  const isMatch = await bcrypt.compare(payload.password, user.password);

  if (!isMatch) {
    throw new Error(USER_CONSTANTS.LOGIN_MESSAGES.INVALID_CREDENTIALS);
  }

  //   const token = jsonwebtoken.sign(
  //     { userId: user.id, role: user.role },
  //     process.env.JWT_SECRET,
  //     { expiresIn: "1h" },
  //   );

  return {
    user: user,
    message: USER_CONSTANTS.LOGIN_MESSAGES.LOGIN_SUCCESS,
  };
};
