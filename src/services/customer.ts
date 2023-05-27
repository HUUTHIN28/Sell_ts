import { AppDataSource } from "../utils/database";
import { Custormer } from "../entities/customer";
import { customerInterface } from "../interfaces/customer";

const customerModule = AppDataSource.getRepository(Custormer);

export const postCustomerSeriver = async (data: customerInterface) => {
  const createCustomer = await customerModule.create(data);
  return await customerModule.save(createCustomer);
};

export const getCustomerService = async () => {
  const customer = await customerModule.find({
    relations: {
      room: true,
      auth: true,
      house: true,
      listMember: true,
    },
  });
  return customer;
};
