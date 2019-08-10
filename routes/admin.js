const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-user", adminController.getREAddUser);
//admin/products => GET
router.get("/", adminController.getUsers);

//admin/add-product => POST
router.post("/add-user", adminController.postAddUser);

router.get("/edit-user/:userId", adminController.getEditUser);

router.post("/edit-user", adminController.postEditProduct);

router.post("/delete-user", adminController.postDeleteUser);

//routers for the admin view

router.get("/Assets", adminController.getAssets);
router.get("/postEdit", adminController.postREEditRealAsset);
router.get("/postAdd", adminController.postREAddRealAsset);
router.get("/removeAssets", adminController.postRERemoveAsset);

router.get("/add-chart", adminController.postAddChartAsset);
router.get("/edit-chart", adminController.postEditChartAsset);
router.get("/delete-chart", adminController.removeChart);

router.get("/add-card", adminController.postAddCard);
router.get("/postEditCard", adminController.postEditCard);
router.get("/DeleteCard", adminController.postDeleteCard);
router.get("/:id", adminController.getUser);
module.exports = router;
