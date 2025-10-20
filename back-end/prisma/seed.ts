import { PrismaClient } from "@prisma/client";
import { pharmaciesData } from "./data/pharmaciesData";
import { appReviewsData } from "./data/appReviewsData";
// import { usersData } from "./data/usersData";

declare const process: any;
const prisma = new PrismaClient();

type ModelName = "pharmacy" | "appReview"; // | "user"

const seedData: Record<ModelName, any[]> = {
  pharmacy: pharmaciesData,
  appReview: appReviewsData,
  // user: usersData,
};

async function createItem(modelName: ModelName, item: any) {
  switch (modelName) {
    case "pharmacy":
      return prisma.pharmacy.create({ data: item });
    case "appReview":
      return prisma.appReview.create({ data: item });
    // case "user":
    //   return prisma.user.create({ data: item });
    default:
      throw new Error(`Unknown model: ${modelName}`);
  }
}

async function main() {
  console.log("Seeding database...");

  for (const [modelName, dataArray] of Object.entries(seedData) as [
    ModelName,
    any[]
  ][]) {
    console.log(`Seeding ${modelName}...`);
    for (const item of dataArray) {
      await createItem(modelName, item);
    }
    console.log(`✅ ${modelName} seeded successfully!`);
  }

  console.log("🎉 All data seeded!");
}

main()
  .catch((e) => {
    console.error("❌ Error while seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
