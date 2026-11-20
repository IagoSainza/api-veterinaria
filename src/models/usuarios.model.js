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

const insertNuevoUsuario = async ({
    dni, nombre, apellidos, fecha_nacimiento = null, telefono = null, email = null, direccion = null, localidad = null, codigo_postal = null, acepta_comunicaciones = null, fecha_alta = null
}) => {
    const [result] = await db.execute(
        `insert into dueno
            (dni, nombre, apellidos, fecha_nacimiento, telefono, email, direccion, localidad, codigo_postal, acepta_comunicaciones, fecha_alta)
         values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [dni, nombre, apellidos, fecha_nacimiento, telefono, email, direccion, localidad, codigo_postal, acepta_comunicaciones, fecha_alta]
    )
    return result.insertId
}

const deleteUsuarioPorId = async (idUsuario) => {
    const [result] = await db.execute('delete from dueno where id = ?', [idUsuario])
    if (result.affectedRows === 1) {
        return { status: true, message: 'El usuario se ha borrado correctamente' }
    } else {
        return { status: false, message: 'Ha ocurrido un error intentalo de nuevo' }
    }
}

const updateUsuarioPorId = async (idUsuario, {
    dni, nombre, apellidos, fecha_nacimiento = null, telefono = null, email = null, direccion = null, localidad = null, codigo_postal = null, acepta_comunicaciones = null, fecha_alta = null
}) => {
    const [result] = await db.execute(`update dueno
     set dni = ?, nombre = ?, apellidos = ?, fecha_nacimiento = ?, telefono = ?,
         email = ?, direccion = ?, localidad = ?, codigo_postal = ?,
         acepta_comunicaciones = ?, fecha_alta = ?
     where id = ?`,
        [dni, nombre, apellidos, fecha_nacimiento, telefono, email, direccion, localidad, codigo_postal, acepta_comunicaciones, fecha_alta, idUsuario])
    return result
}

export { selectAllUsers, selectUsuarioPorId, selectUsuarioPorDNI, selectUsuariosPorLocalidad, selectUsuariosPorComunicaciones, selectUsuariosPorApellido, selectUsuarioDatos, insertNuevoUsuario, deleteUsuarioPorId, updateUsuarioPorId }

