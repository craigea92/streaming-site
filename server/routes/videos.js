import express from "express";
import {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  addView,
  trending,
  random,
  sub,
  getByTag,
  search
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// CREATE VIDEO
router.post("/", verifyToken, addVideo);
// UPDATE VIDEO
router.put("/:id", verifyToken, updateVideo);
// DELETE VIDEO
router.delete("/:id", verifyToken, deleteVideo);
// FIND VIDEO
router.get("/find/:id", getVideo);
// INCREASE VIEW COUNT
router.post("/view/:id", addView);
// SHOW TRENDING VIDEOS
router.post("/trend", trending);
// SHOW RANDOM VIDEOS
router.post("/random", random);
// SHOW SUBSCRIBER VIDEOS
router.get("/sub",verifyToken, sub)
// SHOW VIDEOS BY TAG
router.get("/tags", getByTag)
// GET VIDEOS BY TITLE
router.get("/search", search)

export default router;
