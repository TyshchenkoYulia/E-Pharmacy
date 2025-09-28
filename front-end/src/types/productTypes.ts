export interface Product {
  id: number;
  photo: string;
  name: string;
  suppliers: string;
  stock: string;
  price: string;
  category: string;
  review: ProductReview[];
}

export interface ProductReview {
  id: number;
  photo: string;
  name: string;
  date: string;
  text: string;
  rating: number;
}

export interface MedicinalUse {
  title: string;
  text: string;
}

export interface ProductDescriptionType {
  general: string;
  medicinalUses: MedicinalUse[];
}
