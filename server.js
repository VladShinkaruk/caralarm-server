const express = require("express");
const app = express();

let command = "OFF";

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/command", (req, res) => {
  res.send(command);
});

app.get("/set", (req, res) => {
  const newCmd = req.query.cmd;
  if (newCmd === "ON" || newCmd === "OFF") {
    command = newCmd;
    res.send("Command set to " + command);
  } else {
    res.send("Invalid command");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server started"));
