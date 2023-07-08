import express from "express";
import routes from "./routes";

const server = express();

//--ROUTES_RESPONSABILITY--
server.use("/", routes);

server.listen(3000, () => {
  console.log("Servidor Express en ejecución en el puerto 3000");
});
