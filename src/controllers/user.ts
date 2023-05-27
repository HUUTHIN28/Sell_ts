import { Request, Response } from "express";

import { AppDataSource } from "../utils/database";
import { loginCreate, userCreate } from "../interfaces/user";
import { auth } from "../entities/auth";
import * as bcrypt from "bcryptjs";

import { generateToken } from "../services/user";

const userModel = AppDataSource.getRepository(auth);

export const Singin = async (req: Request, res: Response) => {
  try {
    const { email, password }: userCreate = req.body;
    console.log("checkEmail", req.body);

    const checkUser = await userModel.findOneBy({ email: email });
    if (!checkUser?.email) {
      return res.status(400).json({ message: "User not foud" });
    }

    const isMatch = await bcrypt.compareSync(password, checkUser?.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const payload: loginCreate = {
      email: checkUser?.email,
      user: checkUser?.user,
      role: checkUser?.role,
    };

    const results = await generateToken(payload);

    res.status(200).json({ mes: "success", data: results });
  } catch {
    res.status(401).json({ mes: "thất bại" });
  }
};

export const CreateAccount = async (req: Request, res: Response) => {
  try {
    const { email, password, role, user }: userCreate = req.body;

    const checkEmail = await userModel.findOneBy({ email });
    if (checkEmail) {
      return res.status(400).json({ message: "User already exists" });
    }
    console.log("checkEmail", checkEmail);
    console.log("data", email, password, role, user);

    const hashedPassword = await bcrypt.hashSync(password, 12);
    console.log("hashedPassword", hashedPassword);
    const createUser = userModel.create({
      user,
      email,
      role,
      password: hashedPassword,
    });

    userModel.save(createUser);
    return res.status(200).json({ message: "User registered successfully" });
  } catch {
    return res.status(400).json({ message: false });
  }
};
