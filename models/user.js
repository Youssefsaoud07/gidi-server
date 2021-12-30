import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  location:{type:String},
  energy:{type:Number},
  image:{type:String},
  gendre:{type:String},
  phonenumber:{type:String},
  birthyear:{type:String},
  accountbalance:{type:String},
  accountnumber:{type:String},
  accountname:{type:String},
  bankname:{type:String},
  
  
});
var User = mongoose.model("User", userSchema)
export default User ;