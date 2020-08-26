import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";

// @ts-ignore
export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>
}
