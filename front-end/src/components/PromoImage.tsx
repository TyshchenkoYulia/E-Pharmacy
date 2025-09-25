import girlDesk1x from "../assets/img/girl-desk.png";
import girlDesk2x from "../assets/img/girl-desk-2x.png";
import girlTab1x from "../assets/img/girl-tab.png";
import girlTab2x from "../assets/img/girl-tab-2x.png";
import girlMob1x from "../assets/img/girl-mob.png";
import girlMob2x from "../assets/img/girl-mob-2x.png";

export default function PromoImage() {
  return (
    <div className="w-full flex justify-center mb-[20px] desktop:mb-0 desktop:justify-end">
      <picture>
        {/* Desktop */}
        <source
          media="(min-width: 1440px)"
          srcSet={`${girlDesk1x} 1x, ${girlDesk2x} 2x`}
        />

        {/* Tablet */}
        <source
          media="(min-width: 768px)"
          srcSet={`${girlTab1x} 1x, ${girlTab2x} 2x`}
        />

        {/* Mobile */}
        <img
          src={girlMob1x}
          srcSet={`${girlMob1x} 1x, ${girlMob2x} 2x`}
          alt="Pharmacy Promo"
          className="
            w-[295px] h-[315px] object-cover 
            tablet:w-[608px] tablet:h-[406px]
            desktop:w-[608px] desktop:h-[406px]
            rounded-[16px]
            opacity-100
            rotate-0
          "
          loading="lazy"
        />
      </picture>
    </div>
  );
}
