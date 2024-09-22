const ModelUser = require("../models/ModelUser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const AuthLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username === "")
      return res
        .status(400)
        .json({ message: "Username tidak boleh kosong!", error: "username" });
    if (password === "")
      return res
        .status(400)
        .json({ message: "Password tidak boleh kosong!", error: "password" });
    const checkUsername = await ModelUser.findAll({
      where: {
        username: username,
      },
    });

    if (!checkUsername[0])
      return res
        .status(404)
        .json({ message: "Username tidak terdaftar!", error: "username" });

    const matchPassword = await bcrypt.compare(
      password,
      checkUsername[0].password
    );

    if (!matchPassword)
      return res
        .status(400)
        .json({ message: "Password anda salah!", error: "password" });

    const userId = checkUsername[0].id_user;
    const role = checkUsername[0].role;

    const token = jwt.sign({ userId, role }, process.env.ACCESS_TOKEN, {
      expiresIn: "1d",
    });

    await ModelUser.update(
      {
        token: token,
      },
      {
        where: {
          id_user: userId,
        },
      }
    );

    const data = {
      userId: userId,
      role: role,
    };

    res.cookie(
      "token",
      { token, userId },
      {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      }
    );

    return res.status(200).json({ data, token });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, fullname, password, role } = req.body;
    if (username === "")
      return res
        .status(400)
        .json({ message: "Username tidak boleh kosong!", error: "username" });
    if (fullname === "")
      return res
        .status(400)
        .json({ message: "Nama tidak boleh kosong!", error: "fullname" });
    if (password === "")
      return res
        .status(400)
        .json({ message: "Password tidak boleh kosong!", error: "password" });
    if (role === "")
      return res
        .status(400)
        .json({ message: "Role tidak boleh kosong!", error: "role" });
    const checkUsername = await ModelUser.findAll({
      where: { username: username },
    });
    if (checkUsername[0])
      return res
        .status(400)
        .json({ message: "Username sudah terdaftar!", error: "username" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    await ModelUser.create({
      username: username,
      password: hashPassword,
      fullname: fullname,
      role: role,
    });

    return res.status(201).json({ message: "User berhasil di simpan!" });
  } catch (error) {
    return res.status(500);
  }
};

const RemoveToken = async (req, res) => {
  await ModelUser.update(
    {
      token: null,
    },
    {
      where: {
        id_user: req.params.id,
      },
    }
  );

  res.clearCookie("token");

  return res.sendStatus(200);
};

module.exports = { AuthLogin, createUser, RemoveToken };
