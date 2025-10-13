import { useNavigate } from "react-router-dom";
import PromoImage from "./PromoImage";

export default function PromoContent() {
  const navigate = useNavigate();

  return (
    <div
      className="
                 bg-greenPrimary  mb-[40px] tablet:mb-[64px] 
                 p-[20px] tablet:py-[40px] tablet:px-[48px] 
                 desktop:py-[40px] desktop:pr-[40px] desktop:pl-[80px] 
                 rounded-[32px]  text-whitePrimary
                desktop:flex
                  "
    >
      <div>
        <div className="  w-[290px]  tablet:w-[488px] ">
          <h2
            className="text-[28px] leading-[32px]font-bold mt-[20px] mb-[20px] 
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
    </div>
  );
}
