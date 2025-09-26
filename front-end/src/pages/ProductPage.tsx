import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import type { Product } from "../assets/data/products";
import ProductOverview from "../components/ProductOverview";
import ProductContainer from "../components/ProductContainer";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <p className="mt-[120px] px-[20px]">Product not found</p>;
  }

  return (
    <section className="mt-[120px] mb-[80px] px-[20px]">
      <ProductOverview product={product as Product} />
      <ProductContainer />
    </section>
  );
}
