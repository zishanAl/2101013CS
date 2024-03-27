const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true, unique: true },
    clientID:{type:string, required:true},
    clientSecret:{type : string, required: true,unique: true},
    ownerName: { type: String, required: true},
    ownerEmail: { type: String, required: true, unique: true },
    rollNo:{type:internal, required:true, unique:true}
  }
);

module.exports = mongoose.model("Auth", AuthSchema);
