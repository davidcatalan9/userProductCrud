import express from "express";
import UsuarioRouter from "./routes/usuario.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", UsuarioRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
