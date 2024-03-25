import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  host: "localhost",
  username: "root",
  password: "",
  database: "db_tiket",
  dialect: "mysql",
});

try {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export { sequelize, DataTypes };
