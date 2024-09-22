const ModelCafe = require("../models/ModelCafe");

const createCafe = async (req, res) => {
  try {
    const { name, address, phoneNumber } = req.body;

    if (name === "")
      return res
        .status(400)
        .json({ message: "Nama cafe tidak boleh kosong!", error: "name" });
    if (address === "")
      return res
        .status(400)
        .json({ message: "Alamat cafe tidak boleh kosong!", error: "address" });
    if (phoneNumber === "")
      return res.status(400).json({
        message: "Nomor telfon cafe tidak boleh kosong!",
        error: "phoneNumber",
      });

    const checkCafe = await ModelCafe.findAll({
      where: {
        name: name,
      },
    });

    if (checkCafe[0])
      return res.status(400).json({ message: "Cafe sudah terdaftar!" });

    await ModelCafe.create({
      name: name,
      address: address,
      phoneNumber: phoneNumber,
    });

    return res.status(201).json({ message: "Cafe berhasil di simpan!" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getCafe = async (req, res) => {
  try {
    const response = await ModelCafe.findAll();

    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const updateCafe = async (req, res) => {
  try {
    const { name, address, phoneNumber } = req.body;

    if (name === "")
      return res
        .status(400)
        .json({ message: "Nama cafe tidak boleh kosong!", error: "name" });
    if (address === "")
      return res
        .status(400)
        .json({ message: "Alamat cafe tidak boleh kosong!", error: "address" });
    if (phoneNumber === "")
      return res.status(400).json({
        message: "Nomor telfon cafe tidak boleh kosong!",
        error: "phoneNumber",
      });

    await ModelCafe.update(
      {
        name: name,
        address: address,
        phoneNumber: phoneNumber,
      },
      {
        where: {
          id_cafe: req.params.id,
        },
      }
    );

    return res.status(200).json({ message: "Cafe berhasil di ubah!" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const deleteCafe = async (req, res) => {
  try {
    await ModelCafe.destroy({ where: { id_cafe: req.params.id } });

    return res.status(200).json({ message: "Data berhasil di hapus!" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = { createCafe, getCafe, updateCafe, deleteCafe };
