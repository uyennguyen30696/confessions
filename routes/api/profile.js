const router = require("express").Router();
const confessionController = require("../../controllers/confessionController");

// Matches with "/api/profile/"
router.route("/")
    // .get(confessionController.findAll)
    .get(confessionController.findAllByUsername)
    .post(confessionController.create);

// Matches with "/api/profile/:id"
router.route("/:id")
    .get(confessionController.findById)
    .put(confessionController.update)
    .delete(confessionController.remove);

module.exports = router;
