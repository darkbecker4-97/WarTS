import { User } from "../models/user";

export type MongoUser = Omit<User, "id">;

import { Indicated } from "../models/indicated";

export type MongoIndicate = Omit<Indicated, "id">;
export default MongoIndicate;
