import express from "express";
import { verifyToken } from "../verifyToken.js";
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from "../controllers/user.js";

const router = express.Router();

//UPDATE USER
router.put("/:id", verifyToken, update);
//DELETE USER
router.delete("/:id", deleteUser);
//GET A USER
router.put("/find/:id", getUser);
//SUBSCRIBE A USER
router.put("/sub/:id", subscribe);
//UNSUBSCRIBE A USER
router.put("/unsub/:id", unsubscribe);
//LIKE A VIDEO
router.put("/like/:videoId", like);
//DISLIKE A VIDEO
router.put("/dislike/:videoId", dislike);
export default router;
