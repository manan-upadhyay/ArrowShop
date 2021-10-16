import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc    Auth the user & get token
// @route   POST api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    if (await user.matchPassword(password)) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: null,
      });
    } else {
      res.status(401);
      throw new Error("Password do not match!");
    }
  } else {
    res.status(401);
    throw new Error("User not found!");
  }
  res.send({ email, password });
});

export { authUser };
