const { Router } = require("express");

const {
    renderLogin,
    renderSignup,
    renderDashboard,
    renderCreateBlog,
    renderBlogById,
    renderEditBlogById,
    renderHome
} = require("../../controllers/views");

const router = Router();

router.get("/login", renderLogin);
router.get("/sign-up", renderSignup);
router.get("/dashboard", renderDashboard);
router.get("/create-blog", renderCreateBlog);
router.get("/blogs/:id", renderBlogById);
router.get("/blogs-edit/:id", renderEditBlogById);
router.get("/", renderHome);

module.export = router