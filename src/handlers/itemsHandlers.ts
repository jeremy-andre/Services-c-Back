import { Request, Response } from "express";

// Prisma Config Use
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// USER GET -----------------------------------------------------------
export const getAllItemsHandler = async (req: Request, res: Response) => {
  try {
    // Obtener todos los items de la base de datos utilizando Prisma
    const items = await prisma.item.findMany();

    // Devolver la lista de items en la respuesta
    res.status(200).json(items);
  } catch (error) {
    console.error("Error al obtener los items:", error);
    res.status(500).json({ error: "Error al obtener los items" });
  }
};

export const getItemByIdHandler = async (req: Request, res: Response) => {
  const { name } = req.params;
  const formattedName = name.replace(/-/g, " ");

  try {
    const item = await prisma.item.findFirst({
      where: { name: formattedName },
    });

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    return res.json(item);
  } catch (error) {
    console.error("Error retrieving item:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
