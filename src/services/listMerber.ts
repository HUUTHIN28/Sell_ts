import { AppDataSource } from "../utils/database";
import { ListMember } from "../entities/listMember";
import {
  listmerberInterface,
  paginationInterface,
} from "../interfaces/listmerber";

const listmerberModule = AppDataSource.getRepository(ListMember);

export const getAllListMerber = async (
  data: object,
  pagination: paginationInterface
) => {
  const listMerber = await listmerberModule.find({
    relations: {
      custormer: true,
    },
    where: data,
    order: {
      id: "ASC",
    },
    skip: pagination?.offset,
    take: pagination?.limit,
  });
  return listMerber;
};

export const filterListMerber = async (data: object) => {
  const filterListMerber = await listmerberModule.findOne({ ...data });
  return filterListMerber;
};

export const createListMerber = async (data: listmerberInterface) => {
  const createListMerber = await listmerberModule.create(data);
  return await listmerberModule.save(createListMerber);
};

export const deleteListMerber = async (id: number) => {
  const deleteListMerber = listmerberModule.delete(id);
  return deleteListMerber;
};

export const updateListMerberService = async (id: string, data: object) => {
  const upate = await listmerberModule.update(id, data);
  return upate;
};
