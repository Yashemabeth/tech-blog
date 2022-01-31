const renderLogin = (req, res) => {
    res.send("renderLogin,")
};
const renderSignup = (req, res) => {
    res.send("renderSignup.")
};
const renderDashboard = (req, res) => {
    res.send("renderDashboard,")
};
const renderCreateBlog =(req, res) => {
    res.send(",renderCreateBlog")
};
const renderBlogById = (req, res) => {
    res.send("renderBlogId,")
};
const renderEditBlogById = (req, res) => {
    res.send("renderEditBlogById,")
};
const renderHome = (req, res) => {
    res.send("renderHome,")
};

module.exports = {
    renderLogin,
    renderSignup,
    renderDashboard,
    renderCreateBlog,
    renderBlogById,
    renderEditBlogById,
    renderHome
} 
