import { Router } from "express";
import { crearNuevoUsuario } from "../controllers/usuario.controller.js";

const route = Router();

router.post("/usuario", crearNuevoUsuario);

export default router;
