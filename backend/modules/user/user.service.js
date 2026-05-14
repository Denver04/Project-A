exports.registerUser = async (payload) => {

    // const existingUser =
    //     await userRepository.findByEmail(payload.email);

    // if (existingUser) {
    //     throw new Error("User already exists");
    // }

    // const hashedPassword =
    //     await bcrypt.hash(payload.password, 10);

    // const user = await userRepository.create({
    //     ...payload,
    //     password: hashedPassword
    // });

    return "User registered successfully";
};