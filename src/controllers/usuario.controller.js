import { Usuario } from "../models/usuario.Model.js";

export const crearNuevoUsuario = async (req, res) => {
  try {
    const data = req.body;
    const usuario = await Usuario.crear(data);

    res.status(201).json({
      message: "Usuario creado correctamente",
      status: 201,
      data: usuario,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el usuario",
      status: 500,
      error,
    });
  }
};
