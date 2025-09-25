import { useNavigate } from "react-router-dom";
import PromoImage from "./PromoImage";

export default function PromoContent() {
  const navigate = useNavigate();

  return (
    <section
      className="flex flex-col justify-center items-center 
                 bg-greenPrimary  my-[40px] mx-[20px] 
                 h-[674px]  rounded-[32px] p-6 text-whitePrimary
                  tablet:h-[912px] tablet:mt-[120px] tablet:mb-[64px]
                  desktop:h-[486px] desktop:flex-row desktop:py-[40px]
                   desktop:pr-[40px] desktop:pl-[80px] "
    >
      <div>
        <div className="  w-[290px] mt-[40px] tablet:w-[488px] tablet:mt-[80px]">
          <h2
            className="text-[28px] leading-[32px]font-bold mb-[20px] 
        tablet:text-[48px] tablet:leading-[55px] tablet:mb-[24px]"
          >
            Add the medicines you need online now
          </h2>
          <p className="text-[14px] leading-[18px] tablet:text-[16px] tablet:leading-[20px]">
            Enjoy the convenience of having your prescriptions filled from home
            by connecting with your community pharmacy through our online
            platform.
          </p>
        </div>

        <div
          className="rounded-[60px] text-start border border-whiteSecondary inline-block 
        my-[40px] tablet:mb-[80px]
      transition-transform hover:scale-110 hover:border-hoverGreen"
        >
          <button
            onClick={() => navigate("/medicine-store")}
            className="
      rounded-[60px] 
      py-[13px] px-[32px]
      font-semibold transition-transform hover:scale-110 hover:text-hoverGreen
    "
          >
            Buy medicine
          </button>
        </div>
      </div>
      <PromoImage />
    </section>
  );
}
