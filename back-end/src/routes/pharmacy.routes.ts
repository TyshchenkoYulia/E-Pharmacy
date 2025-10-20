import { Router } from "express";
import { PharmacyController } from "../controllers/pharmacy.controller";
import { PharmacyService } from "../services/pharmacy.service";

const router = Router();
const pharmacyService = new PharmacyService();
const pharmacyController = new PharmacyController(pharmacyService);

router.get("/", pharmacyController.getAllPharmacies);
router.get("/:id", pharmacyController.getPharmacyById);

export default router;
