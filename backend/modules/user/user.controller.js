exports.register = async (req, res, next) => {
    try {

        // Registration logic here

        res.status(201).json({ message: "User registered successfully" });

    } catch (err) {
        next(err);
    }
};