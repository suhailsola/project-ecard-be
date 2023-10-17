import { postgresConnection } from "./connection";
import Rsvp from "./model/Rsvp";
import Wish from "./model/Wish";

async function syncModels() {
  await postgresConnection.sync({ alter: true });
  await postgresConnection.authenticate();
  await Rsvp.sync({ alter: true });
  await Wish.sync({ alter: true });
}

async function dbInit() {
  try {
    console.debug("Connection to the database");
    await syncModels();
    console.debug("Connected to the database");
  } catch (error) {
    console.log(error);
    console.error("Failed to connect");
    process.exit(1);
  }
}

export default dbInit;
