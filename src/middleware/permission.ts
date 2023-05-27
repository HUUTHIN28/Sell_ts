import { NextFunction, Request, Response } from "express";

import config from "../utils/config";
import { verifyJwt } from "../services/user";
import { loginCreate } from "../interfaces/user";

export const requireLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let accessToken;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("JWT")
    ) {
      accessToken = req.headers.authorization.split(" ")[1];
      console.log(
        'req.headers.authorization.split(" ")[1]',
        req.headers.authorization.split(" ")[1]
      );
    }
    if (!accessToken) {
      return res.status(400).json({ mes: "token false" });
    }

    const accessTokenDecoded = verifyJwt<any>(
      accessToken,
      config.JWT_ACCESS_TOKEN!
    );
    console.log("accessTokenDecoded", accessTokenDecoded);

    if (!accessTokenDecoded) {
    }
    res.locals.account = accessTokenDecoded;
    req.session.account = accessTokenDecoded;
    // req.session.User = {
    //   website: "anonystick.com",
    //   type: "blog javascript",
    //   like: "4550",
    // };
    return next();
  } catch (err: any) {}
};

export const checkPermissions = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const account: loginCreate = req.session.account!;
      console.log("account", account);

      if (Array.isArray(roles) && roles.includes(account.role)) {
        return next();
      }
    } catch (err: any) {}
  };
};
