import mongoose from "mongoose"

const assetSchema = new mongoose.Schema({
    serialNo:{
        type:String,
        required:true,
    },
    deviceName:{
        type:String,
        required:true,
    },
    manufacturer:{
        type:String,
        required:true,
    },
    ram:{
        type:String,
        required:true,
    },
    processor:{
        type:String,
        required:true,
    },
    storage:{
        type:String,
        required:true,
    },
    yearOfManufacturer:{
        type:String,
        required:true,
    },
    yearOfProcurement:{
        type:String,
        required:true,
    },
    deviceStatus:{
        type:String,
        enum: ['Assigned', 'Not Assigned'],
        default: 'Not Assigned'
    },
    archieveStatus:{
        type: Boolean,
        required: true,
        default:false
    },
},{timestamps:true});

 export const  Asset = mongoose.model("Asset", assetSchema);