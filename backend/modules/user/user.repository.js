const prisma = require("../../config/prisma");

exports.create = async (userData) => {
  // Database query logic here to create a new user
  return prisma.user.create({
    data: userData,
  });
};

exports.findByPhoneNumber = async (phoneNumber) => {
  // Database query logic here to find user by phone number
  return prisma.user.findUnique({
    where: {
      phoneNumber: phoneNumber,
    },
  });
};
