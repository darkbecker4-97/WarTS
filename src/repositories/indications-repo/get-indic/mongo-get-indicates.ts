import { IGetIndicatesRepository } from "../../../controllers/indications-controller/get-indic/protocols";
import { MongoClient } from "../../../database/mongo";
import { Indicated } from "../../../models/indicated";
import { MongoIndicate } from "./../../mongo-protocols";

export class MongoGetIndicatesRepository implements IGetIndicatesRepository {
  async getIndicates(): Promise<Indicated[]> {
    const indications = await MongoClient.db
      .collection<MongoIndicate>("indications")
      .find({})
      .toArray();

    return indications.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }
}
