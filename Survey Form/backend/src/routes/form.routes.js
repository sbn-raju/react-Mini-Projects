import { Router } from "express";
import fromDataHandlerController from "../controllers/form.controllers.js";

const route = Router();

route.post("/api/form",fromDataHandlerController);

export default route;
