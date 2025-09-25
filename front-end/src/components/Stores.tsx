import { useState } from "react";
import AddressIcon from "../assets/img/address-icon.svg";
import PhoneIcon from "../assets/img/phone-icon.svg";
import StarIcon from "../assets/img/star-icon.svg";
import BgIcon1 from "../assets/img/bg-icon-1.svg";
import BgIcon2 from "../assets/img/bg-icon-2.svg";
import BgIcon3 from "../assets/img/bg-icon-3.svg";
import Pagination from "./Pagination";

interface Store {
  name: string;
  address: string;
  city: string;
  phone: string;
  rating: number;
}

const stores: Store[] = [
  {
    name: "Pharmacy Hope",
    address: "Shevchenka St, 100",
    city: "Lviv",
    phone: "0322-45-67-89",
    rating: 4,
  },
  {
    name: "Pharmakor",
    address: "Hoholia St, 24",
    city: "Kharkiv",
    phone: "0572-58-22-12",
    rating: 3,
  },
  {
    name: "Aesculap",
    address: "Peace Ave, 5",
    city: "Dnipro",
    phone: "056-744-55-66",
    rating: 5,
  },
  {
    name: "Balsam",
    address: "Soborna St, 14",
    city: "Rivne",
    phone: "0362-62-33-44",
    rating: 3,
  },
  {
    name: "Med-Service",
    address: "Lesi Ukrainki St, 78",
    city: "Zaporizhzhia",
    phone: "0612-34-56-78",
    rating: 4,
  },
  {
    name: "Pharmacy",
    address: "Freedom Ave, 120",
    city: "Ternopil",
    phone: "0352-52-43-21",
    rating: 3,
  },
  {
    name: "Pharmacy 24",
    address: "Kyivska St, 48",
    city: "Cherkasy",
    phone: "0472-35-67-89",
    rating: 4,
  },
  {
    name: "Good Medicines",
    address: "Independence St, 67",
    city: "Ivano-Frankivsk",
    phone: "0342-50-60-70",
    rating: 5,
  },
  {
    name: "Plantain",
    address: "Petlyury St, 29",
    city: "Vinnytsia",
    phone: "0432-65-88-99",
    rating: 4,
  },
  {
    name: "Pharmacy Plus",
    address: "Dovzhenka St, 3",
    city: "Lutsk",
    phone: "0332-78-90-10",
    rating: 3,
  },
  {
    name: "Med-Medicines",
    address: "Kosmonavtiv St, 12",
    city: "Mykolaiv",
    phone: "0512-47-58-69",
    rating: 2,
  },
  {
    name: "Pharmaland",
    address: "Gagarin Ave, 17",
    city: "Kherson",
    phone: "0552-49-50-60",
    rating: 4,
  },
  {
    name: "Medicines from the Heart",
    address: "Starokyivska St, 5",
    city: "Chernihiv",
    phone: "0462-67-89-90",
    rating: 5,
  },
  {
    name: "Good Day Pharmacy",
    address: "Halytska St, 23",
    city: "Chernivtsi",
    phone: "0372-55-66-77",
    rating: 4,
  },
  {
    name: "Health",
    address: "Stepana Bandery St, 56",
    city: "Uzhhorod",
    phone: "0312-61-62-63",
    rating: 3,
  },
  {
    name: "Panacea",
    address: "Chervonoi Kalyny Ave, 76",
    city: "Lviv",
    phone: "032-245-76-88",
    rating: 2,
  },
  {
    name: "Pharmplanet",
    address: "Ostrozkoho St, 37",
    city: "Poltava",
    phone: "0532-60-71-82",
    rating: 5,
  },
  {
    name: "Pharmacy Penny",
    address: "Krymskoho St, 18",
    city: "Simferopol",
    phone: "0652-51-62-73",
    rating: 4,
  },
  {
    name: "Pharmacy 36.6",
    address: "Hrushevskoho St, 4",
    city: "Kyiv",
    phone: "044-501-36-86",
    rating: 3,
  },
  {
    name: "Vitafarm",
    address: "Studentska St, 12",
    city: "Sumy",
    phone: "0542-67-88-99",
    rating: 5,
  },
];

const ITEMS_PER_PAGE = 8;

export default function Stores() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(stores.length / ITEMS_PER_PAGE);

  const paginatedStores = stores.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="mt-[40px]">
      <div
        className=" grid gap-[20px] justify-center
      grid-cols-1
      tablet:grid-cols-2
      desktop:grid-cols-3
      justify-items-center"
      >
        {paginatedStores.map((store, index) => (
          <div
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
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
