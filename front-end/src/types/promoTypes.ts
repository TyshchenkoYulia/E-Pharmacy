export interface PromoBanner {
  title: string;
  subtitle: string;
  buttonText: string;
  type: "discount" | "info";
  value?: number;
  link: string;
}
