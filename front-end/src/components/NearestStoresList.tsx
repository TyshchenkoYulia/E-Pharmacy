import type { Pharmacy } from "../types/storesTypes";
import { useEffect, useState } from "react";
import AddressIcon from "../assets/img/address-icon.svg";
import PhoneIcon from "../assets/img/phone-icon.svg";
import StarIcon from "../assets/img/star-icon.svg";
import BgIcon1 from "../assets/img/bg-icon-1.svg";
import BgIcon2 from "../assets/img/bg-icon-2.svg";
import BgIcon3 from "../assets/img/bg-icon-3.svg";
import axios from "axios";

export default function NearestStoresList() {
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);

  useEffect(() => {
    const fetchPharmacies = async () => {
      try {
        const response = await axios.get<{ data: Pharmacy[] }>(
          "http://localhost:3000/api/pharmacies"
        );

        setPharmacies(response.data.data);
      } catch (error) {
        console.error("Error fetching pharmacies:", error);
      }
    };

    fetchPharmacies();
  }, []);

  const shuffled = [...pharmacies].sort(() => 0.5 - Math.random());
  const randomPharmacies = shuffled.slice(0, 6);

  return (
    <ul
      className="grid gap-[20px] 
        grid-cols-1
        tablet:grid-cols-2
        desktop:grid-cols-3
        justify-items-center"
    >
      {randomPharmacies.map((pharmacy, index) => (
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
                {pharmacy.name}
              </h3>

              <div className="flex gap-[8px] mb-[18px] items-start">
                <img src={AddressIcon} alt="Address Icon" />
                <div className="flex flex-col ">
                  <p
                    className="text-[14px] leading-[18px] font-400 text-secondaryText
                      tablet:text-[16px]  tablet:leading-[20px]"
                  >
                    {pharmacy.address}
                  </p>
                  <p
                    className="text-[14px] leading-[18px] font-400 text-secondaryText
                      tablet:text-[16px]  tablet:leading-[20px]"
                  >
                    {pharmacy.city}
                  </p>
                </div>
              </div>

              <div className="flex gap-[8px] ">
                <img src={PhoneIcon} alt="Phone Icon" />
                <p className="text-[14px] leading-[18px] font-400 text-secondaryText">
                  {pharmacy.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[14px] tablet:mt-[36px] ">
              <div className="flex gap-[6px] tablet:ml-[30px]">
                <img src={StarIcon} alt="Star Icon" />
                <span className="text-[14px] leading-[18px] font-medium text-primaryText">
                  {pharmacy.rating}
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
            className="absolute bottom-2 right-0"
          />
          <img
            src={BgIcon2}
            alt="Background Icon"
            className="absolute bottom-8 right-0"
          />
          <img
            src={BgIcon3}
            alt="Background Icon"
            className="absolute bottom-0 right-0"
          />
        </li>
      ))}
    </ul>
  );
}
