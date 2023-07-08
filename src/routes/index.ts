import express from "express";
import { Router } from "express";
import itemsRouter from "./itemsRouter";

// Crea un nuevo enrutador usando la clase Router de Express
const router = Router();

// Define las rutas y los controladores asociados
router.use("/items", itemsRouter);

// Exporta el enrutador para usarlo en otros archivos
export default router;
