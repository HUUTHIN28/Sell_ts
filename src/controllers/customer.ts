import { Request, Response } from "express";
import { customerInterface } from "../interfaces/customer";
import { getCustomerService, postCustomerSeriver } from "../services/customer";

export const postCustomer = async (req: Request, res: Response) => {
  try {
    const data: customerInterface = req.body;
    const customer = await postCustomerSeriver(data);

    if (!customer) {
      return res.status(404).json({ mes: "Thêm khách hàng thất bại" });
    }
    return res.status(200).json({ mes: true });
  } catch {
    return res.status(400).json({ mes: "Thêm khách hàng thất bại" });
  }
};

export const getCustomer = async (req: Request, res: Response) => {
  try {
    const customer = await getCustomerService();

    if (!customer) {
      return res.status(400).json({ mes: false });
    }
    return res.status(400).json({ mes: true, data: customer });
  } catch {
    return res.status(400).json({ mes: false });
  }
};
