import bcrypt from "bcrypt";
import User from "../model/user/user.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) return res.status(400).send("user already exists");

    if (!password) return res.status(400).send("provide a password");

    if (password !== confirmPassword) {
      return res.status(400).send("password doesnot match");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(200).send(user?._id);
  } catch (error) {
    console.log(error);
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) res.status(400).send("user don`t exists");

    const decodedPassword = await bcrypt.compare(password, user.password);
    if (!decodedPassword) res.status(400).send("invalid username or password");

    const token = jwt.sign({ id: user._id, email }, "test", {
      expiresIn: "1hr",
    });
    res.cookie("authToken", token, { httpOnly: true, maxAge: 1000 * 60 * 60 });
    res.status(200).send({ id: user._id });
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("authToken", " ", { maxAge: 10 });
    res.status(200).send("log");
  } catch (error) {
    res.status(500).send(error);
  }
};
