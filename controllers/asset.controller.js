import {Asset} from "../models/asset.model.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import { errorResponse } from "../utils/errorResponse.js"
import { apiResponse } from "../utils/apiResponse.js";


//  ----------------------------------------------------------------//
export const addAsset= asyncHandler(async(req,res)=>{
   const newAsset = new Asset(req.body)
   const data =await newAsset.save();
  
    if(!data)
      throw new errorResponse(500,"error in creating new asset " ) 
   
    return res
    .status(201)
    .json(new apiResponse(201, data, "asset added  successfully"));

    
})

// -----------------------------------------------------------------------

export const getAllAsset= asyncHandler(async(req,res)=>{
   const data = await Asset.find();
   
   if(data.length === 0)
    throw new errorResponse(500 ,"error in getting  all asset " ) 
    
   return res
    .status(200)
    .json(new apiResponse(200, data, " asset returned successfully"));
})

// -------------------------------------------------------------------------

const getAsset= asyncHandler(async(req,res,next)=>{

   const data = await Asset.findById(req.params.id);
   if(!data)
     return next(new errorResponse(500 ,"error in getting  asset by id  " ))
   
   return res
   .status(200)
   .json(new apiResponse(200, data, "specific asset returned   successfully"));
   
})

// --------------------------------------------------

const archieveAsset = asyncHandler(async(req,res)=>{
    const data = await Asset.findById(req.params.id);
    if(!data)
      return next(new errorResponse(500 ,"error in getting  asset by id  " ))
    

})


// -------------------------------------------

const restoreAsset = asyncHandler(async(req,res)=>{

})

// ------------------------------------------------

const deleteStatus =asyncHandler(async(req,res)=>{

})

//-----------------------------------------------------------