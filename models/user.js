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
  accountnumber:{type:String},
  accountname:{type:String},
  bankname:{type:String},
  balance:{type:Number}
  
  
});
var User = mongoose.model("User", userSchema)
export default User ;