import { AppDataSource } from "../utils/database";
import { House } from "../entities/house";
import { houseInterface } from "../interfaces/house";
import { paginationInterface } from "../interfaces/listmerber";

const houseModule = AppDataSource.getRepository(House);

export const getAllhouse = async (
  data: object,
  pagination: paginationInterface
) => {
  const house = await houseModule.find({
    select: {
      id: true,
      name: true,
      address: true,
      phone: true,
    },
    where: data,
    relations: {
      rooms: true,
    },
    skip: pagination?.offset,
    take: pagination?.limit,
  });
  // const total = await houseModule.find({
  //   select: {
  //     id: true,
  //     name: true,
  //     address: true,
  //     phone: true,
  //   },
  // });
  return { house };
};

export const filterService = async (data: object) => {
  const dataFilter = await houseModule.findOneBy({ ...data });
  return dataFilter;
};

export const postHouseService = async (data: houseInterface) => {
  const createHouse = await houseModule.create(data);
  return await houseModule.save(createHouse);
};

export const deleteHoseService = async (id: number) => {
  const deleteHouse = await houseModule.delete(id);
  return deleteHouse;
};

export const updateListHouse = async (id: number, data: object) => {
  const update = await houseModule.update(id, data);
  return update;
};
