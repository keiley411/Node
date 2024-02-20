const fsPromises = require("fs").promises;
const zipper = require('zip-local')
const promise = async () => {
  try {
    const data = await fsPromises.readFile("zip.txt");
    zipper.sync.zip("./zip.txt").compress().save("pack.zip");
  } catch (err) {
    console.error(err);
  }
};
 
promise()
 