const {Router} = require("express");

const login = require("./blogs");
const signup = require("./comments");
const logout = require("./comments");

const router = Router();

router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);

module.exports = router;
