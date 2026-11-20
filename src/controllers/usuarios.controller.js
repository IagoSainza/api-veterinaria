import { selectAllUsers, selectUsuarioPorId, selectUsuarioPorDNI, selectUsuariosPorLocalidad, selectUsuariosPorComunicaciones, selectUsuariosPorApellido, selectUsuarioDatos, insertNuevoUsuario, deleteUsuarioPorId, updateUsuarioPorId } 
from "../models/usuarios.model.js";


const getAllUsers = async (req, res) => {
    const usuarios = await selectAllUsers();
    res.json(usuarios)
}

//

const getUsuarioPorId = async (req, res) => {
    const usuario = await selectUsuarioPorId(Number(req.params.idUsuario))
    res.json(usuario)
}

const getUsuarioPorDNI = async (req, res) => {
    const usuario = await selectUsuarioPorDNI((req.params.dni))
    res.json(usuario)
}
 
const getUsuariosPorLocalidad = async (req, res) => {
    const usuarios = await selectUsuariosPorLocalidad((req.params.localidad))
    res.json(usuarios)
}

const getUsuariosPorComunicaciones = async (req, res) => {
    const usuarios = await selectUsuariosPorComunicaciones ((req.params.comunicaciones))
    res.json(usuarios)
}

const getUsuariosPorApellido = async (req, res) => {
    const usuarios = await selectUsuariosPorApellido ((req.params.apellido))
    res.json(usuarios)
}

const getUsuarioDatos = async (req, res) => {
    const usuario = await selectUsuarioDatos (Number(req.params.idUsuario))
    res.json(usuario)
}

const insertUsuario = async (req, res) => {
    const idNuevoUsuario = await insertNuevoUsuario ((req.body))
    const usuario = await selectUsuarioPorId(idNuevoUsuario)
    res.json(usuario)
}

const deleteUsuario = async (req, res) => {
    const response = await deleteUsuarioPorId(Number(req.params.idUsuario))
    res.json(response)
}

const editUsuario = async (req, res) => {
    const dataUsuario = req.body
    const idUsuario = Number(req.params.idUsuario)

    const respuesta = await updateUsuarioPorId(idUsuario, dataUsuario)

    if (respuesta.affectedRows === 1) {
        const usuario = await selectUsuarioPorId(idUsuario)
        res.json(usuario)
    } else {
        res.json({ status: false, message: "No se ha podido actualizar el usuario" })
    }
}

export { getAllUsers, getUsuarioPorId, getUsuarioPorDNI, getUsuariosPorLocalidad, getUsuariosPorComunicaciones, getUsuariosPorApellido, getUsuarioDatos, insertUsuario, deleteUsuario, editUsuario }

