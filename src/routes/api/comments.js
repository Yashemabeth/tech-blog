const { Router} = require("express");

const router = Router();

router.post("/", createComments);

module.exports = router;