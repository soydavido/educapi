import { DataSource } from "typeorm";
import path from "path";
import {
  CustomLogger,
  getConnectionConfig,
  getEnv,
  Lang,
  logCatchedException,
  Logger,
  logTypeORMCatchedError,
  OrmFacade,
  ServiceProvider,
  SnakeCaseNamingStrategy,
} from "@ant/framework";

export default class DatabaseProvider extends ServiceProvider {
  boot(): Promise<void> {
    return new Promise((resolve, reject) => {
      const sqliteCon = new DataSource({
        type: "sqlite",
        database: "educapi",
        entities: [path.join(__dirname, "..", "models/**/**.*")],
        synchronize: true,
      });

      try {
        sqliteCon
          .initialize()
          .then(() => {
            Logger.info("SQLite database connection established successfully.");
            resolve();
          })
          .catch((err) => {
            Logger.error("Cannot established connection with SQLite database.");
            Logger.error(err);
          });
      } catch (error) {}
    });
  }
}
