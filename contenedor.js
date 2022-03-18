const fs = require('fs');

const readProductFile = async () => {
  return fs.promises.readFile("./productos.txt", "utf-8");
};

class Contenedor {
  constructor() {
    this.archivo = [];
  }

  async getAll() {
    try {
      const file = await readProductFile();
      if (file && file.length > 0) {
        return JSON.parse(fileExist);
      }
    }
    catch {
      throw new Error(error.message);
    }
  }

  async getRandom() {
    try {
      const file = await readProductFile();
      if (file && file.length > 0) {
        const data = JSON.parse(file);
        return data[Math.floor(Math.random() * (data.length))]
      }

    } catch(error) {
      throw new Error(error.message)
    }
  }
}

module.exports = Contenedor;