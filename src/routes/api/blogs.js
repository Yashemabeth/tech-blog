const { Router} = require("express");

const router = Router();

router.post("/", createBlog);
router.post("/:id", updateBlogById);
router.post("/:id", deleteBlogById);

module.exports = router;