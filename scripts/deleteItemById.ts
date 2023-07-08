import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteItemById = async (itemId: string) => {
  try {
    // Verificar si el registro existe en la base de datos
    const existingItem = await prisma.item.findUnique({ where: { id: itemId } });

    // Si el registro existe, eliminarlo de la base de datos
    if (existingItem) {
      await prisma.item.delete({ where: { id: itemId } });
      console.log(`Registro con ID ${itemId} eliminado de la base de datos`);
    } else {
      console.log(`No se encontró ningún registro con ID ${itemId}`);
    }
  } catch (error) {
    console.error("Error al eliminar el registro:", error);
  } finally {
    await prisma.$disconnect();
  }
};

// Llamar a la función y pasar el ID del registro a eliminar
deleteItemById(""); // Reemplaza 1 con el ID del registro que deseas eliminar
