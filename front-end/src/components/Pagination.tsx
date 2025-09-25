import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <section className="flex justify-center items-center gap-2 mt-[40px] tablet:mt-[80px]">
      {/* На початок */}
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className="px-2 py-1 border rounded disabled:opacity-50 
        transition-transform hover:scale-110 hover:text-hoverGreen"
      >
        <KeyboardDoubleArrowLeftIcon />
      </button>

      {/* На 1 сторінку назад */}
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="px-2 py-1 border rounded disabled:opacity-50
        transition-transform hover:scale-110 hover:text-hoverGreen"
      >
        <KeyboardArrowLeftIcon />
      </button>

      {/* Кнопки з цифрами сторінок */}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`py-[9px] px-[14px] flex items-center justify-center rounded-full border
            text-[14px] leading-[18px] font-bold
             transition-transform hover:scale-110 hover:text-hoverGreen
      ${
        currentPage === i + 1
          ? "bg-greenPrimary text-whitePrimary border-greenPrimary"
          : "bg-whitePrimary text-primaryText border-grayColor"
      }`}
        >
          {i + 1}
        </button>
      ))}

      {/* На 1 сторінку вперед */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-2 py-1 border rounded disabled:opacity-50
        transition-transform hover:scale-110 hover:text-hoverGreen"
      >
        <KeyboardArrowRightIcon />
      </button>

      {/* На кінець */}
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 border rounded disabled:opacity-50
        transition-transform hover:scale-110 hover:text-hoverGreen"
      >
        <KeyboardDoubleArrowRightIcon />
      </button>
    </section>
  );
}
