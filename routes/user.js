import express from "express";
import {
  createUser,
  obtenerUsuario,
  deleteUser,
  updateUser
} from "../controllers/user";

const router = express.Router();

// router.get('/', )
router.post('/crear', createUser); 
router.get('/usuarios', obtenerUsuario);
router.put('/editar/:_id', updateUser)
router.delete('/eliminar/:_id', deleteUser)

export default router;