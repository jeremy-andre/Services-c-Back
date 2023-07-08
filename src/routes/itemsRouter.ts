import express from "express";
import { Router } from "express";
import { getAllItemsHandler, getItemByIdHandler } from "../handlers/itemsHandlers";

// Crea un nuevo enrutador usando la clase Router de Express
const itemsRouter = Router();

// USER GET -----------------------------------------------------------
itemsRouter.get("/", getAllItemsHandler);
itemsRouter.get("/:name", getItemByIdHandler);

export default itemsRouter;
