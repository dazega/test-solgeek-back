import UserModel from "../models/User";
import mongoose from "mongoose";

export const createUser = async (req, res) => {
  try{
    const {
      apellido:Apellido = '',
      correo:Correo = '',
      nombre:Nombre = '',
      status:Status = ''
    } = req.body;

    if (Apellido === '' || Correo === '' || Nombre === '' || Status === '') return res.status(400).json({ message: 'Error en los parametros' });

    console.log('Esta pasando esta parte');
    const usuario = new UserModel({
      Apellido,
      Correo,
      Nombre,
      Status
    });

    await usuario.save();

    return res.status(200).json(usuario);
  }
  catch(error){
    return res.status(500).json({ message: 'Error en el servicio' });
  }
}

export const obtenerUsuario = async (req, res) => {
  try{
    const usuarios = await UserModel.find({}).select({ Nombre: 1, Apellido: 1, Correo: 1, Status: 1 });

    return res.status(200).json({ usuarios });
  }catch(error){
    return res.status(500).json({ message: 'Error en el servicio', usuarios: [] });
  }
}
