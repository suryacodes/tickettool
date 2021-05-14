const router = require("express").Router();
const { add } = require("../service/user");

router.post("/user", async (req, res) => {
  const result = await add(req.body);
  res.status(result.statusCode).json(result);
});

router.put("/user", (req, res) => {});

router.get("/user", (req, res) => {});

router.delete("/user", (req, res) => {});

module.exports = router;
