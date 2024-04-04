import mongoose, { Mongoose, Schema } from "mongoose";
const productSchema = new Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
    },
    price:{
        type:Number,
        required:true,
         
    },
    image:{
        type:String,
    },
    description:{
        type:String,
    },
},{timestamps:true, versionKey:false}) 
export default mongoose.model("Product",productSchema);