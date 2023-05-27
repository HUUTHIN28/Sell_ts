import { loginCreate } from "../interfaces/user";
import config from "../utils/config";
import * as security from "../shareds/security";
import jwt from "jsonwebtoken";

export const generateToken = (data: loginCreate) => {
  const accessToken = security.signJwt(
    data,
    config.JWT_ACCESS_TOKEN,
    config.ACCESS_TOKEN_EXPIRES_IN
  );
  const refreshToken = security.signJwt(
    data,
    config.JWT_REFRESH_TOKEN,
    config.REFRESH_TOKEN_EXPIRES_IN
  );
  return { accessToken, refreshToken };
};

export const verifyJwt = <T>(token: string, secretKey: string): any => {
  try {
    return jwt.verify(token, secretKey) as T;
  } catch (error: any) {}
};
