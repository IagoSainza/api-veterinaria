import db from "../config/db.js";

const selectAllUsers = async () => {
    const [result] = await db.execute('select * from dueno')
    return result
}

const selectUsuarioPorId = async (idUsuario) => {
    const [result] = await db.execute('select * from dueno where id = ?', [idUsuario])
    return result[0]
}

const selectUsuarioPorDNI = async (dniUsuario) => {
    const [result] = await db.execute('select * from dueno where dni = ?', [dniUsuario])
    return result[0]
}

const selectUsuariosPorLocalidad = async (localidadUsuarios) => {
    const [result] = await db.execute('select * from dueno where localidad = ?', [localidadUsuarios])
    return result
}

const selectUsuariosPorComunicaciones = async (comunicacionesUsuarios) => {
    const [result] = await db.execute('select * from dueno where acepta_comunicaciones = ?', [comunicacionesUsuarios])
    return result
}
// IA: Claude me sugirió usar LIKE con % para encontrar el apellido aunque haya dos (ej. "López Fernández")
const selectUsuariosPorApellido = async (usuariosPorApellido) => {
    const [result] = await db.execute('select * from dueno where apellidos like ?', [`%${usuariosPorApellido}%`])
    return result
}

const selectUsuarioDatos = async (usuarioDatos) => {
    const [result] = await db.execute('select nombre, dni, telefono from dueno where id = ?', [usuarioDatos])
    return result[0]
}

export { selectAllUsers, selectUsuarioPorId, selectUsuarioPorDNI, selectUsuariosPorLocalidad, selectUsuariosPorComunicaciones, selectUsuariosPorApellido, selectUsuarioDatos }

/* ===== MI VERSIÓN (antes de que Juan lo cambiara a ...Users) =====
import db from '../config/db.js'

const selectAll = async () => {
    //aqui dentro vamos a hacer la consulta a BBDD => select * from dueno
    const [result] = await db.execute('select * from dueno')
    return result
}

export { selectAll }*/
