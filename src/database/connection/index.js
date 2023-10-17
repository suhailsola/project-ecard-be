import { Sequelize } from "sequelize";
import config from "../../config";

const data = config.postgres;
console.log(data);

export const postgresConnection = new Sequelize(
  data.database,
  data.username,
  data.password,
  {
    hooks: true,
    host: data.host,
    port: data.port,
    dialect: "postgres",
    logging: config.nodeEnv === "development",
    dialectOptions: {
      ssl:
        config.nodeEnv === "production"
          ? {
              require: true,
              rejectUnauthorized: false,
            }
          : false,
    },
  }
);
