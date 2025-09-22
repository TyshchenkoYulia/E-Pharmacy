export interface User {
  id: number;
  photo?: string | null;
  name: string;
  email: string;
  password: string;
  spent: string; // Prisma повертає Decimal як string
  phone: string;
  address?: string | null;
  registerDate: Date;
}
