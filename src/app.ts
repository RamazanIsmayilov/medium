import { Request, Response } from "express";
import express from "express";
import cors from "cors";
const app = express();
import connect from "./config/db"
import config from "./config"
import router from "./routes";
import path from "path";

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "./uploads")))

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Medium application" });
});

app.use("/api", router)

connect()
app.listen(config.port, () => {
  console.log(`application is running on http://localhost:${config.port}`);
});
