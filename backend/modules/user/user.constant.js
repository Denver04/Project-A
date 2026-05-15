const USER_CONSTANTS = {
  USER_ROLES: {
    USER: "USER",
    GUARD: "GUARD",
  },

  USER_STATUS: {
    ACTIVE: "ACTIVE",
    BLOCKED: "BLOCKED",
  },

  LOGIN_MESSAGES: {
    INVALID_CREDENTIALS: "Invalid credentials",
    USER_EXISTS: "User already exists",
    REGISTRATION_SUCCESS: "User registered successfully",
    REGISTRATION_FAILURE: "Registration failed",
    LOGIN_SUCCESS: "User logged in successfully",
    LOGIN_FAILURE: "Login failed",
  },
  OTP_MESSAGES: {
    OTP_SENT: "OTP sent successfully",
    OTP_VERIFICATION_SUCCESS: "OTP verification successful",
    OTP_VERIFICATION_FAILURE: "Invalid OTP",
  },
};

module.exports = USER_CONSTANTS;
