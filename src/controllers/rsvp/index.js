import { postgresConnection } from "../../database/connection";
import Rsvp from "../../database/model/Rsvp";
import { parseMessage } from "../../utils/helper";

export const getRsvp = async (req, res) => {
  try {
    const booking = await Rsvp.findAll();

    if (!booking) return res.status(200).json(parseMessage("No booking yet"));

    res.status(200).json(parseMessage("Here are the bookings", booking));
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const newRsvp = async (req, res) => {
  const booking = req.body;

  if (Object.keys(booking).length === 0) {
    return res.status(400).json(parseMessage("Invalid input"));
  }
  try {
    await postgresConnection.transaction(async (t) => {
      const newBooking = await Rsvp.create(
        {
          nama: booking.nama,
          hubungan: booking.hubungan || null,
          kehadiran: booking.kehadiran,
          sesi: booking.sesi,
          jumlah: booking.jumlah,
        },
        { transaction: t }
      );
      res.status(200).json(parseMessage("New booking", newBooking));
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
