const { Router} = require("express");

const { createComment } = require("../../controllers/api/comments");

const router = Router();

router.post("/", createComments);

module.exports = router;