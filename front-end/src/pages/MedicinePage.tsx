import { useState } from "react";
import products from "../assets/data/products";
import type { Product } from "../assets/data/products";
import MedicineFilterContent from "../components/MedicineFilterContent";
import MedicineList from "../components/MedicineList";

export default function MedicinePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [filtered, setFiltered] = useState<Product[]>(products);

  const applyFilters = () => {
    let data = products as Product[];

    if (category) {
      data = data.filter((p) => p.category === category);
    }

    if (search.trim()) {
      const s = search.trim().toLowerCase();
      data = data.filter((p) => p.name.toLowerCase().includes(s));
    }

    setFiltered(data);

    console.log("apply", { search, category });
  };

  const handleReset = () => {
    console.log("handleReset called");
    setSearch("");
    setCategory("");
    setFiltered(products);
  };

  return (
    <section className="mt-[120px] mb-[80px] px-[20px]">
      <h1 className="text-[28px] leading-[32px] font-bold">Medicine</h1>

      <MedicineFilterContent
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        onApply={applyFilters}
        onReset={handleReset}
      />

      <MedicineList filteredProducts={filtered} />
    </section>
  );
}
