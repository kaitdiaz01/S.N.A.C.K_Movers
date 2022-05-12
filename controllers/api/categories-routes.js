const router = require("express").Router();
const { Categories } = require("../../models");


router.get("/", async (req, res) => {
  console.log("getting categories")
    try{
        const categoryData = await Categories.findAll();
        
        const categories = categoryData.map((category) => category.get({ plain: true }));

        res.status(500).json(categories);
} catch (err) {
    res.status(500).json(err);
}
});

module.exports = router;