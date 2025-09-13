import express from "express";
import cors from "cors";
import { config } from "./config/config";
import prisma from "./config/prismaClient";

const app = express();

app.use(cors());
app.use(express.json());

// app.use();

app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err);
    res.status(500).json({ message: err.message || "Internal server error" });
  }
);

async function testDbConnection() {
  try {
    await prisma.$connect(); // підключаємося до бази
    console.log("✅ Successfully connected to the database!");
  } catch (error) {
    console.error("❌ Failed to connect to the database:", error);
    process.exit(1); // завершуємо сервер, якщо не вдалося підключитися
  }
}

testDbConnection();

const PORT = config.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
