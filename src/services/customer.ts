import { AppDataSource } from "../utils/database";
import { Custormer } from "../entities/customer";
import { customerInterface } from "../interfaces/customer";

const customerModule = AppDataSource.getRepository(Custormer);

export const postCustomerSeriver = async (data: any) => {
  const createCustomer = await customerModule.create(data);
  return await customerModule.save(createCustomer);
};
export const checkCustomerSeriver = async (idAuth: number) => {
  const customer = await customerModule.findOne({
    where: {
      auth: {
        id: idAuth,
      },
    },
  });
  return customer;
};

export const getCustomerService = async () => {
  const customer = await customerModule.find({
    relations: {
      room: true,
      auth: true,
      listMember: true,
    },
  });
  return customer;
};
