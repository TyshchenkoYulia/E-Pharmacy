import { Request, Response, NextFunction } from "express";
import { PharmacyService } from "../services/pharmacy.service";

export class PharmacyController {
  constructor(private pharmacyService: PharmacyService) {}

  getAllPharmacies = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const pharmaciesDto = await this.pharmacyService.getAllPharmacies();
      res.status(200).json(pharmaciesDto);
    } catch (error) {
      next(error);
    }
  };

  getPharmacyById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const pharmacyId = Number(req.params.id);
      if (isNaN(pharmacyId)) {
        return res.status(400).json({ message: "Invalid pharmacy ID" });
      }

      const pharmacy = await this.pharmacyService.getPharmacyById(pharmacyId);
      res.status(200).json(pharmacy);
    } catch (error) {
      next(error);
    }
  };
}
