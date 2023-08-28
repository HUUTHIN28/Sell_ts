import { Room } from "../entities/room";
import { AppDataSource } from "../utils/database";

const roomModule = AppDataSource.getRepository(Room);

export const getAllRoom = async () => {
  const roomlist = await roomModule.find({});
  return roomlist;
};

export const findOneRoom = async (filter: object) => {
  const data = roomModule.findOneBy({ ...filter });
  return data;
};
export const postRoomService = async (data: object) => {
  const createRoom = await roomModule.create(data);
  return await roomModule.save(createRoom);
};
