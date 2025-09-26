import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

interface Props {
  search: string;
  setSearch: (v: string) => void;
  category: string;
  setCategory: (v: string) => void;
  onApply: () => void;
  onReset: () => void;
}

export default function MedicineFilterContent({
  search,
  setSearch,
  category,
  setCategory,
  onApply,
  onReset,
}: Props) {
  return (
    <section className="mt-[40px] mb-[40px] flex flex-col gap-[20px] ">
      <div
        className="flex flex-col gap-[20px] tablet:flex-row 
    tablet:items-center "
      >
        <div className="relative w-[335px] tablet:w-[214px] desktop:w-[224px]">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-[18px] py-[13px] border border-secondaryText rounded-[60px]
      text-[12px] leading-[18px] font-400 text-secondaryText
      outline-none transition-transform hover:scale-105 hover:text-hoverGreen
      appearance-none "
          >
            <option value="" disabled>
              Product category
            </option>
            <option value="Medicine">Medicine</option>
            <option value="Heart">Heart</option>
            <option value="Head">Head</option>
            <option value="Hand">Hand</option>
            <option value="Leg">Leg</option>
          </select>

          <span
            className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none
          text-secondaryText "
          >
            <KeyboardArrowDownIcon />
          </span>
        </div>

        <div className="relative  w-[335px] tablet:w-[214px] desktop:w-[224px]">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search medicines"
            className="w-full px-[18px] py-[13px] border border-secondaryText rounded-[60px]
      text-[12px] leading-[18px] font-400 text-secondaryText
      outline-none transition-transform hover:scale-105 hover:text-hoverGreen"
          />
          <span
            className="absolute right-4 top-1/2 transform -translate-y-1/2
           pointer-events-none text-secondaryText"
          >
            <SearchIcon />
          </span>
        </div>

        <button
          onClick={onApply}
          className="flex gap-[4px] items-center  w-[130px] bg-greenPrimary text-whitePrimary text-[14px] leading-[18px]
          px-[30px] py-[13px] rounded-[60px] font-semibold 
            transition-transform hover:scale-105 hover:text-hoverGreen"
        >
          <FilterListIcon />
          Filter
        </button>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="flex gap-[4px] items-center justify-center w-[180px] bg-grayColor text-hoverGreen border border-secondaryText text-[14px] leading-[18px]
          px-[30px] py-[13px] rounded-[60px] font-semibold 
            transition-transform hover:scale-105 hover:border-hoverGreen hover:text-hoverGreen"
      >
        <RestartAltIcon />
        Reset filter
      </button>
    </section>
  );
}
