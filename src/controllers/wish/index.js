import { parseMessage } from "../../utils/helper";
import Wish from "../../database/model/Wish";
import { postgresConnection } from "../../database/connection";

export const getWishes = async (req, res) => {
  try {
    const allWishes = await Wish.findAll({ order: [["createdAt", "DESC"]] });

    if (!allWishes) return res.status(200).json(parseMessage("No wishes yet"));

    res
      .status(200)
      .json(parseMessage("Here are the people wishes for you", allWishes));
  } catch (error) {
    res.status(500).json({ error });
  }
};
export const newWish = async (req, res) => {
  const wish = req.body;

  if (Object.keys(wish).length === 0)
    return res.status(400).json(parseMessage("Invalid input"));
  try {
    await postgresConnection.transaction(async (t) => {
      const createdWish = await Wish.create(
        {
          nama: wish.nama,
          ucapan: wish.ucapan || null,
        },
        { transaction: t }
      );
      res.status(200).json(parseMessage("New wish", createdWish));
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
