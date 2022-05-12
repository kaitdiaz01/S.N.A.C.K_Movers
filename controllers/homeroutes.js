const router = require("express").Router();
const { User, Categories } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  res.render("homepage", {
    logged_in: req.session.logged_in,
  });
});

// Use withAuth middleware to prevent access to route
router.get("/categories", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const categoryData = await Categories.findAll();

    const categories = categoryData.map((category) => category.get({ plain: true }));

    res.render("categories", {
      categories,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/categories");
    return;
  }

  res.render("login");
});

module.exports = router;
