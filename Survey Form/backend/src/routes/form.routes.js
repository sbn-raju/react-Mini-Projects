import { Router } from "express";
import { upload } from "../utils/image.upload.utils.js";
import fromDataHandlerController from "../controllers/form.controllers.js";

const route = Router();

route.post("/form",upload.single('imagePath'),fromDataHandlerController);

export default route;
