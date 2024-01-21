import { Schema,model,models } from "mongoose";
 const UserSchema = new Schema({
   
   email: {
     type: String,
     unique: true,
     required: true,
       
   },
   password: {
     type: String,
     required: true,

   },
   createdAt:{
     type: Date,
     default:()=> Date.now(),
     imutable: true,


   }

 })
 export default models.User || model("User", UserSchema)