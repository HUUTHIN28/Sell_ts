import { loginCreate } from "../interfaces/user";
import jwt from "jsonwebtoken";
export const signJwt = (
  payload: loginCreate,
  secretKey: string,
  expiresIn: string
) => {
  return jwt.sign(payload, secretKey, {
    expiresIn: expiresIn,
  });
};
