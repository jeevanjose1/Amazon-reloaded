import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.cookies.authToken;

    const decodeddata = jwt.verify(token, "test");
    req.userId = decodeddata?.id;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
