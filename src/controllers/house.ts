import { Request, Response } from "express";
import {
  deleteHoseService,
  filterService,
  getAllhouse,
  postHouseService,
  updateListHouse,
} from "../services/house";
import { houseInterface, houseUpdate } from "../interfaces/house";
import { log } from "util";
import { emit } from "process";

export const getHouse = async (req: Request, res: Response) => {
  const { offset, limit, email, role }: any = req.query;
  const filter = {
    email: email,
    role: role,
  };

  const pagination = {
    limit: limit || 10,
    offset: offset || 0,
  };
  const listhouse = await getAllhouse(filter, pagination);
  return res.status(200).json({ mes: true, listhouse });

  //   return res.status(400).json({ message: "true", data: listhouse });
};

export const postHouse = async (req: Request, res: Response) => {
  try {
    const data: houseInterface = req.body;
    const { path }: any = req.file;
    const filterHouse = await filterService({ name: data.name });

    if (filterHouse) {
      return res.status(400).json({ mes: "phòng trọ đã tồn tại" });
    }
    console.log("file", req.file);

    const Datahouse = {
      name: data.name,
      phone: data.phone,
      address: data.address,
      img: path,
    };

    await postHouseService(Datahouse);

    return res.status(200).json({ mes: true, Datahouse });
  } catch {
    return res.status(400).json({ mes: false });
  }
};

export const deleteHouse = async (req: Request, res: Response) => {
  try {
    const { id }: any = req.params;
    console.log("id", id);
    const detailHouse = await filterService({ id: id });
    if (!detailHouse) {
      return res.status(400).json({ mes: "not found" });
    }
    const checkdelete = await deleteHoseService(id);

    return res.status(200).json({ mes: true });
  } catch {
    return res.status(400).json({ mes: false });
  }
};
export const detailHouse = async (req: Request, res: Response) => {
  try {
    const { id }: any = req.params;
    console.log("id", id);

    const detailHouse = await filterService({ id: id });
    if (!detailHouse) {
      return res.status(400).json({ mes: "not found" });
    }
    return res.status(200).json({ mes: true, detailHouse });
  } catch {
    return res.status(400).json({ mes: false });
  }
};

export const updateDetail = async (req: Request, res: Response) => {
  try {
    const { id, name, phone, address }: houseUpdate = req.body;

    const data = {
      name: name,
      phone: phone,
      address: address,
    };
    const check = await filterService({ id: id });
    if (!check) {
      return res.status(400).json({ mes: "not found" });
    }
    const updateHouse = updateListHouse(id, data);
    return res.status(200).json({ mes: true });
  } catch {
    return res.status(400).json({ mes: false });
  }
};

export const uploadFile = async (req: Request, res: Response) => {
  try {
    const { name, phone }: any = req.body;
    console.log("file", req.file);
    console.log("name, phone", name, phone);

    return res.status(200).json({ mes: true, file: req.file, name, phone });
  } catch {
    return res.status(400).json({ mes: false });
  }
};
