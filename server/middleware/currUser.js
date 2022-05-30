import User from "../model/user/user.js";
import jwt from "jsonwebtoken";

const currUser = async (req, res, next) => {
  try {
    const token = req.cookies.authToken;
    const decodeddata = jwt.verify(token, "test");
    const user = await User.findById(decodeddata.id);
    res.send(user);
    next();
  } catch (error) {
    console.log(error);
  }
};

export default currUser;
