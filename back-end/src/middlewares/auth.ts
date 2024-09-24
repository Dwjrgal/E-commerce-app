// const jwt = require("jsonwebtoken");

// const auth = (req: Request, res: Response) => {
//   console.log("Check the logged in user", req.headers.authorization);
//   if (!req.headers.authorization) {
//     res.status(401).json({ message: "Please log in" });
//   }
//   const token = req.headers.authorization.split(" ")[1];
//   const user = jwt.verify(token, "JWT_TOKEN_PASS@123");
//   console.log("token", user);
//   req.user = user;
// };
// module.exports = { auth };
