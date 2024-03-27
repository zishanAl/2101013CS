const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
    const newUser = new User({
      companyName: req.body.companyName,
      ownerName: req.body.ownerName,
      rollNo : req.body.rollNo,
      ownerEmail: req.body.ownerEmail,
      accessCode:req.body.accessCode
    });
  
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });