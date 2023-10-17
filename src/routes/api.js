import { Router } from "express";
import { getRsvp, newRsvp } from "../controllers/rsvp";
import { getWishes, newWish } from "../controllers/wish";

const apiRoutes = Router();

export default apiRoutes;

// Booking
apiRoutes.get("/rsvp", getRsvp);
apiRoutes.post("/rsvp", newRsvp);

// Ucapan
apiRoutes.get("/wish", getWishes);
apiRoutes.post("/wish", newWish);
