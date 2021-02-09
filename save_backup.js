const { writeFile } = require("fs");

const saveBackup = async (data, file) => {
  const json = JSON.stringify(data);
  const now = new Date();
  const timeStamp = `${now.getFullYear()}_${
    now.getMonth() + 1
  }_${now.getDate()}`;
  await writeFile(`./backups/${timeStamp}_${file}.json`, json, () => {
    console.log(`${file} backup saved`);
  });
};

module.exports = saveBackup;
