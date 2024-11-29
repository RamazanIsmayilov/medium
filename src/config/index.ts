import dotenv from "dotenv";
import path from "path";

const envPath = path.join(__dirname, "../../.env");

dotenv.config({ path: envPath });

export default  {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URL,
  secretKey: process.env.JWT_SECRET,
}