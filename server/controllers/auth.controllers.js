// Import the password hashing package
import bcrypt from "bcryptjs";

// Local imports
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utilities/TokenGen.js";

export const signup = async (req, res) => {
  // Extract the following info from the request body
  const {
    fullName,
    username,
    password,
    confirmPassword,
    emailAddress,
    gender,
  } = req.body;

  // Logic to prevent users from signing up with empty fields
  if (
    !fullName ||
    !username ||
    !password ||
    !confirmPassword ||
    !emailAddress ||
    !gender
  ) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  // Logic to prevent users from signing up with invalid email addresses
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(emailAddress)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  // Logic to make sure users sign up with passwords at least 6 characters long
  if (password.length < 6) {
    return res
      .status(400)
      .json({
        message:
          "Stop right there! Passwords must be at least 6 characters long!",
      });
  }

  // Logic to prevent users from signing up with invalid passwords
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Those passwords don't match..." });
  }

  try {
    // Logic to prevent users from signing up with a pre-existing email address
    const email = await User.findOne({
      emailAddress,
    });
    if (email) {
      return res
        .status(400)
        .json({ message: "This email address has been used already" });
    }

    // Logic to prevent users from signing up with a pre-existing username
    const user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ message: `Uhmm... Sorry, this username is taken🤲🏻` });
    }

    // Password hashing logic
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Logic to generate profile pictures for users
    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    // Create a new user object
    const newUser = new User({
      fullName,
      username,
      emailAddress,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? maleProfilePic : femaleProfilePic,
    });

    // Save the new user to the database
    if (newUser) {
      // Generate JWT token here
      generateTokenAndSetCookie(newUser._id, res);
      await newUser.save();
      // Send a success message to the user
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        emailAddress: newUser.emailAddress,
        gender: newUser.gender,
        message: "User registered successfully",
      });
    } else {
      res.status(400).json({ message: "User registration failed" });
    }
  } catch (error) {
    console.log(`Error in the signup controller`, error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    // Logic to confirm user credentials, first extract username and password input from the request body
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res
        .status(400)
        .json({
          error: `Invalid details... Are you sure you're one of us?🔎👀`,
        });
    }

    // Generate a token here
    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log(`Error in login controller`, error.message);
    res.status(500).json({ error: "Oops... Server errors😑" });
  }
};

export const logout = async (req, res) => {
  try {
    // Clear the cookie and set maxAge to 0 to make it expire immediately
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    console.log(`Error in logout controller`, error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
