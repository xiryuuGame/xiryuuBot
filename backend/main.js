import express from "express";
import checkhistory from "./CheckHistory.js";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({ 1: ["test"] });
});
app.get("/checkhistory", async (req, res) => {
  await checkhistory();
  res.send({ status: "done" });
});
app.listen(port, () => {
  console.log("App is listening on port: ", port);
});
