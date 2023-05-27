import { Request, Response } from "express";
import { listDelete, listmerberInterface } from "../interfaces/listmerber";
import {
  createListMerber,
  deleteListMerber,
  filterListMerber,
  getAllListMerber,
  updateListMerberService,
} from "../services/listMerber";
import { strict } from "assert";

export const getListMerber = async (req: Request, res: Response) => {
  try {
    const { host, name, limit, offset }: any = req.query;
    const filter = {
      name: name,
      host: host,
    };
    const pagination = {
      limit: limit || 10,
      offset: offset || 0,
    };

    const getListMerber = await getAllListMerber(filter, pagination);
    return res.status(200).json({ mes: true, data: getListMerber });
  } catch {
    return res.status(400).json({ mes: false });
  }
};
export const postListMerber = async (req: Request, res: Response) => {
  try {
    const data: listmerberInterface = req.body;
    const ListMerber = await createListMerber(data);
    return res.status(200).json({ mes: true });
  } catch {
    return res.status(400).json({ mes: false });
  }
};
export const updateListMerber = async (req: Request, res: Response) => {
  try {
    const data: listmerberInterface = req.body;
    const params: any = req.params;

    const updateList = updateListMerberService(params, data);

    if (!updateList) {
      return res.status(400).json({ mes: false });
    }

    return res.status(200).json({ mes: true, data: updateList });
  } catch {
    return res.status(400).json({ mes: false });
  }
};
export const deleteMerber = async (req: Request, res: Response) => {
  try {
    const { id }: listDelete = req.body;
    // console.log("id", req.body);

    const deleteCheck = await deleteListMerber(id);
    if (!deleteCheck) {
      return res.status(400).json({ mes: false });
    }
    return res.status(200).json({ mes: true });
  } catch {
    return res.status(400).json({ mes: false });
  }
};
