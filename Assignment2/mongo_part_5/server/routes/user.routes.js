import express from "express";
import userCtrl from "../controllers/user.controller.js";

const router = express.Router();

router.route("/api/products").get(userCtrl.list).post(userCtrl.create);

router
  .route("/api/products/:productId")
  .get(userCtrl.read)
  .put(userCtrl.update)
  .delete(userCtrl.remove);

router.param("productId", userCtrl.userByID);

export default router;