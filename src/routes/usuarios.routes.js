import { Router } from "express";
import { getAllUsers, getUsuarioPorId, getUsuarioPorDNI, getUsuariosPorLocalidad, getUsuariosPorComunicaciones, getUsuariosPorApellido, getUsuarioDatos, insertUsuario, deleteUsuario, editUsuario } from "../controllers/usuarios.controller.js";

const router = Router()


//obtener todos los usuarios
router.get('/', getAllUsers)

///obtener usuario por id
router.get('/:idUsuario', getUsuarioPorId)

//obtener un usuario completo por su dni
router.get('/dni/:dni', getUsuarioPorDNI)

//obtener todos los usuarios de una localidad
router.get('/localidad/:localidad', getUsuariosPorLocalidad)

//obtener todos los usuarios que aceptan comunicaciones
router.get('/comunicaciones/:comunicaciones', getUsuariosPorComunicaciones)

//obtener todos los usuarios cuyo apellido sea López (cambiar el apellido a otro para que haya mas de un Lopez)
router.get('/apellido/:apellido', getUsuariosPorApellido)

// obtener solo el nombre, dni, telefono de un usuario por id.
router.get('/:idUsuario/datos', getUsuarioDatos)

//insertar un usuario
router.post('/', insertUsuario)

//borrar un usuario por id

router.delete('/:idUsuario', deleteUsuario)

// actualizar los datos de un usuario por id

router.put('/:idUsuario', editUsuario)


export default router;

