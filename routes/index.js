const router = require("express").Router();
const { NOT_FOUND } = require("../utils/errors.js");
const clothingItem = require("./clothingItems.js");

const userRouter = require("./users.js");

router.use("/items", clothingItem);
router.use("/users", userRouter);
router.use((req, res) => {
  res.status(NOT_FOUND).send({ message: "The page wasn't found" });
});

module.exports = router;
