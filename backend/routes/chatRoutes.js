import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { accessChat, addToGroup, createGroupChat, fetchChats, removeFromGroup, renameGroup } from "../controllers/chatControllers.js";

const router = express.Router();

router.post("/", protect, accessChat);
router.get("/", protect, fetchChats);
router.post("/group", protect, createGroupChat);
router.put("/renameGroup", protect, renameGroup);
router.put("/addToGroup", protect, addToGroup);
router.put("/removeFromGroup", protect, removeFromGroup);


export default router;