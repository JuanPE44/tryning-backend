import { pool } from "../db.js";

export const register = async (req, res) => {
  const {
    idUsuario,
    nombre,
    apellido,
    usuario,
    fechaNacimiento,
    genero,
    email,
    telefono,
    altura,
    peso,
  } = req.body;
  const auth = 1;
  try {
    const [response] = await pool.query(
      "INSERT INTO usuarios (id_usuario, usuario, nombre, apellido, fecha_nacimiento, genero, email, telefono,altura,peso, auth) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
      [
        idUsuario,
        usuario,
        nombre,
        apellido,
        fechaNacimiento,
        genero,
        email,
        telefono,
        altura,
        peso,
        auth,
      ]
    );

    res.json(response);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {};
