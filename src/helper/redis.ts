import { NextFunction } from "express";
import { createClient } from "redis";
import { Request, Response } from "express";
export const redisClient = createClient();

export const set = (key: string, value: object) => {
  redisClient.set(key, JSON.stringify(value));
};

export const get = async (req: Request, res: Response, next: NextFunction) => {
  const key: string = req?.baseUrl;
  console.log("key", req?.baseUrl);

  const value = await redisClient?.get(key);
  console.log("key", value);
  if (value) {
    const { data, error } = JSON.parse(value);
    if (data) {
      return res.status(200).json({ mess: "huuthin", data: data });
    } else if (error) {
      return res.status(400).json({ mess: false });
    } else {
      next();
    }
  }
  next();
};

export function jsonCheckAndParse<T = unknown>(
  json: string | null | undefined
): T | null {
  if (!json) return null;

  try {
    return JSON.parse(json) as T;
  } catch (error) {
    return null;
  }
}
