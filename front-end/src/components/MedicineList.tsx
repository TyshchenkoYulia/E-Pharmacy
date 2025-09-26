import { useState, useEffect } from "react";
import products from "../assets/data/products";
import type { Product } from "../assets/data/products";
import MedicineCard from "./MedicineCard";
import Pagination from "./Pagination";

interface Props {
  filteredProducts?: Product[];
}

const ITEMS_PER_PAGE = 12;

export default function MedicineList({ filteredProducts }: Props) {
  const source = filteredProducts ?? products;

  const [currentPage, setCurrentPage] = useState(1);
  const [pageItems, setPageItems] = useState<Product[]>([]);

  useEffect(() => {
    setCurrentPage(1);
  }, [source]);

  useEffect(() => {
    const totalStart = (currentPage - 1) * ITEMS_PER_PAGE;
    const totalEnd = currentPage * ITEMS_PER_PAGE;
    setPageItems(source.slice(totalStart, totalEnd));
  }, [currentPage, source]);

  const totalPages = Math.max(1, Math.ceil(source.length / ITEMS_PER_PAGE));

  return (
    <section className="mt-[40px]">
      <div
        className="grid gap-[20px] justify-center grid-cols-1 tablet:grid-cols-3
       desktop:grid-cols-4 justify-items-center"
      >
        {pageItems.map((p) => (
          <MedicineCard key={p.id} product={p} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(p) => setCurrentPage(p)}
      />
    </section>
  );
}
