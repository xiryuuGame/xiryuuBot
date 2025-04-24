import fs from "fs";
const historyPath = "./assets/historyChat.json";
function checkHistory() {
  if (!fs.existsSync("./assets/")) {
    fs.mkdirSync("./assets/");
  }
  if (!fs.existsSync(historyPath)) {
    fs.writeFileSync(historyPath, JSON.stringify({ 1: [] }));
  }
}
export default module;
