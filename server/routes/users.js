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
router.delete("/:id", verifyToken, deleteUser);
//GET A USER
router.put("/find/:id", getUser);
//SUBSCRIBE A USER
router.put("/sub/:id", verifyToken, subscribe);
//UNSUBSCRIBE A USER
router.put("/unsub/:id", verifyToken, unsubscribe);
//LIKE A VIDEO
router.put("/like/:videoId", verifyToken, like);
//DISLIKE A VIDEO
router.put("/dislike/:videoId", verifyToken, dislike);
export default router;
