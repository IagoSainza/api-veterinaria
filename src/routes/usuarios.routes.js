import { Router } from "express";
import { getAllUsers, usuarioPorid, usuarioPorDNI, usuariosPorLocalidad, usuariosPorComunicaciones, usuariosPorApellido, usuarioDatos } from "../controllers/usuarios.controller.js";

const router = Router()


//obtener todos los usuarios
router.get('/', getAllUsers)

///obtener usuario por id
router.get('/:idUsuario', usuarioPorid)

//obtener un usuario completo por su dni
router.get('/dni/:dni', usuarioPorDNI)

//obtener todos los usuarios de una localidad
router.get('/localidad/:localidad', usuariosPorLocalidad)

//obtener todos los usuarios que aceptan comunicaciones
router.get('/comunicaciones/:comunicaciones', usuariosPorComunicaciones)

//obtener todos los usuarios cuyo apellido sea López (cambiar el apellido a otro para que haya mas de un Lopez)
router.get('/apellido/:apellido', usuariosPorApellido)

// obtener solo el nombre, dni, telefono de un usuario por id.
router.get('/:idUsuario/datos', usuarioDatos)

//insertar un usuario

//borrar un usuario por id

// actualizar los datos de un usuario por id


export default router;

/* ===== MI VERSIÓN (antes de que Juan lo cambiara a ...Users) =====
import { Router } from "express"

import { getAll } from "../controllers/usuarios.controller.js"


const router = Router()

router.get('/', getAll)

export default router*/
