import { postgresConnection } from "../connection";
import { DataTypes } from "sequelize";

const Rsvp = postgresConnection.define(
  "rsvp",
  {
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    hubungan: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    kehadiran: {
      type: DataTypes.BOOLEAN,
    },
    sesi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: false,
    underscored: true,
  }
);

export default Rsvp;
