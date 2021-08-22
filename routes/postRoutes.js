const express = require("express");

const posController = require("../controllers/postController");
const protect = require("../middleware/authMiddleware")

const router = express.Router();

router.route("/")
  .get(protect, posController.getAllPosts)
  .post(protect, posController.createPost);

router
  .route("/:id")
  .get(protect, posController.getOnePost)
  .patch(protect, posController.getUpdatePost)
  .delete(protect, posController.deletePost);

  module.exports =router;
 