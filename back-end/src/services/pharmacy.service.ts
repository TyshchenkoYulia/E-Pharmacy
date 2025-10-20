import prisma from "../config/prismaClient";
import { ApiError } from "../utils/ApiError";
import {
  PharmacyListItemDto,
  PharmacyListResponseDto,
  PharmacyInfoResponseDto,
} from "../types/dto/response/PharmacyResponseDto";

export class PharmacyService {
  async getAllPharmacies(): Promise<PharmacyListResponseDto> {
    const pharmacies = await prisma.pharmacy.findMany({
      orderBy: { id: "asc" },
    });

    if (!pharmacies || pharmacies.length === 0) {
      throw ApiError.notFound("Pharmacies not found");
    }

    const data: PharmacyListItemDto[] = pharmacies.map((pharmacy) => ({
      id: pharmacy.id,
      name: pharmacy.name,
      address: pharmacy.address,
      city: pharmacy.city,
      phone: pharmacy.phone,
      rating: pharmacy.rating,
    }));

    return { data };
  }

  async getPharmacyById(pharmacyId: number): Promise<PharmacyInfoResponseDto> {
    const pharmacy = await prisma.pharmacy.findUnique({
      where: { id: pharmacyId },
    });

    if (!pharmacy) throw ApiError.notFound("Pharmacy not found");

    const pharmacyDto: PharmacyInfoResponseDto = {
      id: pharmacy.id,
      name: pharmacy.name,
      address: pharmacy.address,
      city: pharmacy.city,
      phone: pharmacy.phone,
      rating: pharmacy.rating,
    };

    return pharmacyDto;
  }
}
