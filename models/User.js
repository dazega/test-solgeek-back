import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  Nombre: {
    type: String,
    required: true
  },
  Apellido: {
    type: String,
    required: true
  },
  Correo: {
    type: String,
    required: true
  },
  Status: {
    type: Boolean,
    default: true
  }
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;