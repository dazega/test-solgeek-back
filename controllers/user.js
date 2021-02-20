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

export const updateUser = async (req, res) =>{
  const {
    _id=''
  } = req.params;

  const {
    nombre: Nombre = '',
    apellido: Apellido = '',
    correo:Correo = '',
    status: Status = true
  } = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({message: 'Error en los parametros Id no valido'});

  const user = await UserModel.findById(_id);

  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

  const update = await user.update({
    Nombre,
    Apellido,
    Correo,
    Status
  });

  return res.status(200).json({ update });
}

export const deleteUser = async (req, res) => {
  const {
    _id=''
  } = req.params;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).json({message: 'Error en los parametros Id no valido'});

  const user = await UserModel.findByIdAndRemove(_id);

  if (user) return res.status(404).json({ message: 'Usuario no encontrado' });

  return res.status(200).json({message: 'Usuario eliminado'}); 
}
