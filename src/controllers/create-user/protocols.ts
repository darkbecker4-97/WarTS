import { User } from "../../models/user";
export interface CreateUserParams {
  name: string;
  email: string;
  password: string;
  birthday: string;
  cpf: string;
  referral: string;
  isClient: string;
  pontos: string;
  indicationDate: string;
  indicationStatus: string;
}

export interface ICreateUserRepository {
  createUser(params: CreateUserParams): Promise<User>;
}
