const ModelMenu = require("../models/ModelMenu");

const getMenu = async (req, res) => {
  try {
    const response = await ModelMenu.findAll();

    return res.status(200).json({ response });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const createMenu = async (req, res) => {
  try {
    const { name, price, recommended } = req.body;

    const checkMenu = await ModelMenu.findAll({ where: { name: name } });

    if (checkMenu.length > 0)
      return res.status(400).json({ message: "Menu sudah terdaftar!" });

    await ModelMenu.create({
      name: name,
      price: price,
      recommended: recommended,
    });

    return res.status(201).json({ message: "Data berhasil di simpan!" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
const updateMenu = async (req, res) => {
  try {
    const { name, price, recommended } = req.body;

    await ModelMenu.update(
      {
        name: name,
        price: price,
        recommended: recommended,
      },
      {
        where: {
          id_menu: req.params.id,
        },
      }
    );

    return res.status(200).json({ message: "Data berhasil di ubah!" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
const deleteMenu = async (req, res) => {
  try {
    await ModelMenu.destroy({ where: { id_menu: req.params.id } });

    return res.status(200).json({ message: "Data berhasil di hapus!" });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

module.exports = { getMenu, createMenu, updateMenu, deleteMenu };
