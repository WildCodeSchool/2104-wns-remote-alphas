import { Request, Response } from "express";
const express = require("express");
const app = express();
const PORT = 8000;

app.get("/", (req: Request, res: Response) => res.send("Express + Typescript"));

app.listen(PORT, () => {
  {
    console.log(`Serveur is running on https://localhost:${PORT}`);
  }
});
