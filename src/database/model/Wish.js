import { postgresConnection } from "../connection";
import { DataTypes } from "sequelize";

const Wish = postgresConnection.define(
  "wish",
  {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    ucapan: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false,
    },
  },
  {
    timestamps: true,
    paranoid: false,
    underscored: true,
  }
);

export default Wish;
