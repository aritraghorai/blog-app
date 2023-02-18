import admin from "firebase-admin";

export const userExtractMiddleware = async (req, res, next) => {
  const authtoken = req.headers.authtoken;
  if (!authtoken) {
    return res.status(400).json({
      status: false,
      error: "Unauthorized Request! Please Login",
    });
  }
  const user = await admin.auth().verifyIdToken(authtoken);
  req.user = user;
  next();
};
