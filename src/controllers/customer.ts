import { Request, Response } from "express";
import { customerInterface } from "../interfaces/customer";
import {
  checkCustomerSeriver,
  getCustomerService,
  postCustomerSeriver,
} from "../services/customer";
import { set } from "../helper/redis";
import { findOneRoom } from "../services/room";

export const postCustomer = async (req: Request, res: Response) => {
  try {
    const data: customerInterface = req.body;

    const checkRoom = await findOneRoom({ id: data?.room });

    console.log("checkRoom", checkRoom);
    if (checkRoom?.status) {
      return res.status(400).json({ mes: "The room is already rented" });
    }
    console.log("data", data);

    const idAuth = Number(data.auth);

    const checkUserId = await checkCustomerSeriver(idAuth);
    console.log("checkUserId", checkUserId);

    if (checkUserId) {
      return res.status(404).json({ mes: "used account" });
    }

    console.log();

    const customer = await postCustomerSeriver(data);

    if (!customer) {
      return res.status(404).json({ mes: "more failure" });
    }
    return res.status(200).json({ mes: true });
  } catch {
    return res.status(400).json({ mes: "more failure" });
  }
};

export const getCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await getCustomerService();

    if (!customer) {
      return res.status(400).json({ mes: false });
    }
    console.log("key", req.route.path);

    set(req.baseUrl, { data: customer });
    return res.status(200).json({ mes: true, data: customer });
  } catch {
    return res.status(400).json({ mes: false });
  }
};
