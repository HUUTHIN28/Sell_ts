import { Request, Response } from "express";
import { getAllRoom, postRoomService } from "../services/room";
import { RoomInterface } from "../interfaces/room";

export const getRoom = async (req: Request, res: Response) => {
  try {
    const params: any = req?.params;
    console.log("params", params);

    const room = await getAllRoom();
    return res.status(200).json({ mes: true, data: room });
  } catch {
    return res.status(400).json({ mes: false });
  }
};

export const postRoom = async (req: Request, res: Response) => {
  try {
    const data: RoomInterface = req.body;
    console.log("data", data);

    const createRoom = await postRoomService(data);
    return res.status(200).json({ mes: true, data: data });
  } catch {
    return res.status(400).json({ mes: false });
  }
};
