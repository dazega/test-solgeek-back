import express from "express";
import {
  createUser,
  obtenerUsuario
} from "../controllers/user";

const router = express.Router();

// router.get('/', )
router.post('/crear', createUser); 
router.get('/usuarios', obtenerUsuario);

export default router;