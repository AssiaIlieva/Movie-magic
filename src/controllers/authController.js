const router = require("express").Router();
const User = require("../models/User");
const authService = require("../services/authService");
const { getErrorMessage } = require("../utils/errorUtils");

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const userData = req.body;
  const { email, password, rePassword } = req.body;
  if (password !== rePassword) {
    const message = `Password and Repeate-Password doesn\'t match`;
    res.render("auth/register", { ...userData, error: message });
  }

  try {
    await authService.register(userData);
    res.redirect("/auth/login");
  } catch (error) {
    const message = getErrorMessage(error);
    console.log(message);
    res.render("auth/register", { ...userData, error: message });
  }
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const token = await authService.login(email, password);

  res.cookie("auth", token);

  res.redirect("/");
});

router.get("/logout", (req, res) => {
  res.clearCookie("auth");
  res.redirect("/");
});

module.exports = router;
