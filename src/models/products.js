import { sequelize, DataTypes } from "../config/connsqlz.js";

const Modelproducts = sequelize.define("products", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  storage_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
    onUpdate: sequelize.literal("CURRENT_TIMESTAMP"),
  },
  deletedAt: {
    type: DataTypes.DATE,
    defaultValue: null,
  },
});

export default Modelproducts;
