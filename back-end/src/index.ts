import express from "express";
import cors from "cors";
import { config } from "./config/config";
import prisma from "./config/prismaClient";
import routes from "./routes/global.routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.use(errorHandler);

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
