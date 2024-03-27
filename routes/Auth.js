const router = require("express").Router();
const User = require("../models/Auth");
const jwt = require("jsonwebtoken");

router.post("/auth", async (req, res) => {
    try {
        const user = await Auth.findOne({ companyName: req.body.companyName });
        !user && res.status(401).json("Wrong credentials!");
    
        const OriginalPassword = user.clientSecret;
        OriginalPassword !== req.body.clientSecret &&
          res.status(401).json("Wrong credentials!");
    
        const accessToken = jwt.sign(
          {
            id: user._id,
          },
          process.env.JWT_SEC,
          {expiresIn:"3d"}
        );
    
        const { clientSecret, ...others } = user._doc;
    
        res.status(200).json({...others, accessToken});
      } catch (err) {
        res.status(500).json(err);
      }
  });


  
  module.exports = router;
  