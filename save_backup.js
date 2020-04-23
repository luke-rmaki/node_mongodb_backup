const { writeFile } = require("fs");

const saveBackup = async (data, file) => {
  const json = JSON.stringify(data);
  await writeFile(`./backups/${file}`, json, () => {
    console.log("Backup created");
  });
};

module.exports = saveBackup;
