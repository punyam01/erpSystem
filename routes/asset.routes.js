import express,{Router} from "express";


import {addAsset, getAllAsset} from "../controllers/asset.controller.js"
const router = Router();



router.route("/addAsset", addAsset)
router.route("/allasset",getAllAsset)
router.route("/").get((req, res) => {
    res.status(200).json({
      success: true,
      message: "Blog API is running",
    });
  });

  export  default router;


//   router.post("/addAsset", adminAuthMiddleware, assetsController.addAsset);
// router.get("/getAllAssets",adminAuthMiddleware, assetsController.getAllAssets);
// router.get("/getAllArchiveAssets",adminAuthMiddleware, assetsController.getAllArchiveAssets);
// router.get("/getOneAsset/:id",adminAuthMiddleware, assetsController.getOneAsset);
// router.put("/updateAsset/:id",adminAuthMiddleware, assetsController.updateAsset);
// router.patch("/Asset/:id",adminAuthMiddleware, assetsController.deleteAsset);
// router.patch("/restoreAsset/:id",adminAuthMiddleware, assetsController.restoreAsset);
// router.delete("/permanentDeleteAsset/:id",adminAuthMiddleware, assetsController.permanentDeleteAsset);
// router.get("/totalAssets",adminAuthMiddleware, assetsController.countTotalAssets);
