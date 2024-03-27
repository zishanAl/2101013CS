const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true, unique: true },
    ownerName: { type: String, required: true},
    rollNo:{type:internal, required:true, unique:true},
    ownerEmail: { type: String, required: true, unique: true },
    accessCode:{type:string}
  }
);

module.exports = mongoose.model("User", RegisterSchema);
