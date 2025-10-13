import { useState } from "react";
import AddressIcon from "../assets/img/address-icon.svg";
import PhoneIcon from "../assets/img/phone-icon.svg";
import StarIcon from "../assets/img/star-icon.svg";
import BgIcon1 from "../assets/img/bg-icon-1.svg";
import BgIcon2 from "../assets/img/bg-icon-2.svg";
import BgIcon3 from "../assets/img/bg-icon-3.svg";
import Pagination from "./Pagination";
import stores from "../assets/data/stores";

const ITEMS_PER_PAGE = 8;

export default function StoresList() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(stores.length / ITEMS_PER_PAGE);

  const paginatedStores = stores.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <ul
        className="mt-[40px] grid gap-[20px] justify-center
      grid-cols-1
      tablet:grid-cols-2
      desktop:grid-cols-3
      justify-items-center"
      >
        {paginatedStores.map((store, index) => (
          <li
            key={index}
            className="relative  h-[202px] w-[334px]  rounded-[27px] bg-lightGreen 
            p-[32px] hover:shadow-md transition
            tablet:h-[276px] tablet:w-[344px] tablet:p-[40px]"
          >
            <div className="flex justify-between items-start tablet:flex-col">
              <div>
                <h3
                  className="text-[16px] leading-[18px] font-600 mb-[32px]
                tablet:text-[20px]  tablet:leading-[24px] tablet:mb-[20px]"
                >
                  {store.name}
                </h3>

                <div
                  className="flex gap-[8px] mb-[18px] items-start
                "
                >
                  <img src={AddressIcon} alt="Address Icon" />
                  <div className="flex flex-col ">
                    <p
                      className="text-[14px] leading-[18px] font-400 text-secondaryText
                    tablet:text-[16px]  tablet:leading-[20px]"
                    >
                      {store.address}
                    </p>
                    <p
                      className="text-[14px] leading-[18px] font-400 text-secondaryText
                    tablet:text-[16px]  tablet:leading-[20px]"
                    >
                      {store.city}
                    </p>
                  </div>
                </div>

                <div className="flex gap-[8px] ">
                  <img src={PhoneIcon} alt="Phone Icon" />
                  <p className="text-[14px] leading-[18px] font-400 text-secondaryText">
                    {store.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[14px] tablet:mt-[36px] ">
                <button
                  className="hidden tablet:inline-block py-[10px] px-[16px] rounded-[27px]
               bg-greenPrimary  text-[14px] leading-[14px] text-500 text-whitePrimary
             transition-transform hover:scale-110 hover:text-hoverGreen"
                >
                  Visit Store
                </button>
                <div className="flex gap-[6px] tablet:ml-[30px]">
                  <img src={StarIcon} alt="Star Icon" />
                  <span className="text-[14px] leading-[18px] font-medium text-primaryText">
                    {store.rating}
                  </span>
                </div>
                {(() => {
                  const isOpen = Math.random() > 0.5;

                  return (
                    <span
                      className={`px-[16px] py-[8px] rounded-full text-[12px] leading-[18px] font-bold 
          ${
            isOpen
              ? "bg-lightGreenPrimary text-greenPrimary"
              : "bg-lightRed text-redText"
          }`}
                    >
                      {isOpen ? "OPEN" : "CLOSE"}
                    </span>
                  );
                })()}
              </div>
            </div>

            <img
              src={BgIcon1}
              alt="Background Icon"
              className="absolute bottom-2 right-0  "
            />
            <img
              src={BgIcon2}
              alt="Background Icon"
              className="absolute bottom-8 right-0   "
            />
            <img
              src={BgIcon3}
              alt="Background Icon"
              className="absolute bottom-0 right-0   "
            />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}
