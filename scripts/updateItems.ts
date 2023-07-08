import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seedDatabase = async () => {
  try {
    const itemsToInsert = [
      {
        name: "Producto 1",
        price: 9.99,
        image: "imageimage",
        category: "repisas",
      },
      {
        name: "Producto 2",
        price: 9.99,
        image: "imageimage",
        category: "repisas",
      },
      {
        name: "Producto 3",
        price: 9.99,
        image: "imageimage",
        category: "repisas",
      },
      {
        name: "Producto 4",
        price: 9.99,
        image: "imageimage",
        category: "repisas",
      },
      //--Agregar más items según sea necesario
    ];

    for (const itemData of itemsToInsert) {
      //--Verifica si el registro ya existe en la base de datos
      const existingItem = await prisma.item.findFirst({
        where: { name: itemData.name },
      });

      // Si el registro no existe, insertarlo en la base de datos
      if (!existingItem) {
        await prisma.item.create({
          data: itemData,
        });

        console.log(`Registro ${itemData.name} insertado en la base de datos`);
      }
    }

    console.log("El proceso finalizo");
  } catch (error) {
    console.error("Error al insertar datos iniciales:", error);
  } finally {
    await prisma.$disconnect();
  }
};

seedDatabase();
