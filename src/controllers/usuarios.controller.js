import { selectAllUsers, selectUsuarioPorId, selectUsuarioPorDNI, selectUsuariosPorLocalidad, selectUsuariosPorComunicaciones, selectUsuariosPorApellido, selectUsuarioDatos } from "../models/usuarios.model.js";


const getAllUsers = async (req, res) => {
    const usuarios = await selectAllUsers();
    res.json(usuarios)
}

//

const usuarioPorid = async (req, res) => {
    const usuario = await selectUsuarioPorId(Number(req.params.idUsuario))
    res.json(usuario)
}

const usuarioPorDNI = async (req, res) => {
    const usuario = await selectUsuarioPorDNI((req.params.dni))
    res.json(usuario)
}
 
const usuariosPorLocalidad = async (req, res) => {
    const usuarios = await selectUsuariosPorLocalidad((req.params.localidad))
    res.json(usuarios)
}

const usuariosPorComunicaciones = async (req, res) => {
    const usuarios = await selectUsuariosPorComunicaciones ((req.params.comunicaciones))
    res.json(usuarios)
}

const usuariosPorApellido = async (req, res) => {
    const usuarios = await selectUsuariosPorApellido ((req.params.apellido))
    res.json(usuarios)
}

const usuarioDatos = async (req, res) => {
    const usuario = await selectUsuarioDatos (Number(req.params.idUsuario))
    res.json(usuario)
}

export { getAllUsers, usuarioPorid, usuarioPorDNI, usuariosPorLocalidad, usuariosPorComunicaciones, usuariosPorApellido, usuarioDatos }


/* ===== MI VERSIÓN (antes de que Juan lo cambiara a ...Users) =====
import { selectAll } from "../models/usuarios.model.js"

const getAll = async (req, res) => {
    const usuarios = await selectAll()
    res.json(usuarios)
}

export { getAll }*/
