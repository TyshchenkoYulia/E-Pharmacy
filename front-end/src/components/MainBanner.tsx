import PillsSVG from "../assets/img/pills.svg";

export default function MainBanner() {
  return (
    <section
      className="relative w-full h-[812px] tablet:h-[1024px] desktop:h-[800px]
     bg-greenPrimary overflow-hidden"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div
          className="relative w-[331px] h-[312px] tablet:w-[704px] tablet:h-[508px]
         desktop:w-[749px] desktop:h-[508px]"
        >
          <img
            src={PillsSVG}
            alt="Pills"
            className="w-full h-full object-contain"
          />

          <div className="absolute left-0 top-[44px] tablet:top-[140px] px-2">
            <h1
              className="font-sans font-semibold text-whitePrimary text-[42px] 
            leading-[42px] tablet:text-[74px] tablet:leading-[74px]"
            >
              Your medication delivered
            </h1>
          </div>

          <div
            className="absolute right-0 bottom-[104px] w-[200px] tablet:bottom-[160px] 
          tablet:right-[70px] tablet:w-[220px] text-right px-2"
          >
            <p
              className="font-sans font-normal text-whitePrimary text-[12px] leading-[16px] 
            tablet:text-[16px] tablet:leading-[20px]"
            >
              Say goodbye to all your healthcare worries with us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
