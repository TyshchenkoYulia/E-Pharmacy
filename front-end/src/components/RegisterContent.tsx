import WhiteRoundPill from "../assets/img/white-round-pill.svg";

export default function RegisterContent() {
  return (
    <div className=" w-fit mx-auto py-[48px] ">
      <div className="relative w-[336px] h-[136px] tablet:w-[614px] tablet:h-[240px]">
        <h2
          className="
    font-sans font-semibold text-primaryText
    text-[28px] leading-[34px]
    tablet:text-[54px] tablet:leading-[60px]
      "
        >
          Your medication, <br />
          <img
            src={WhiteRoundPill}
            alt="White Round Pill"
            className="absolute -top-[56px] right-[10px] 
            tablet:-top-[110px] tablet:-right-[10px]
            w-[95px] h-[93px]
            tablet:w-[179px] tablet:h-[175px]"
          />
          delivered Say goodbye <br />
          to all
          <span className="text-greenPrimary"> your healthcare </span>
          worries with us
        </h2>
      </div>
    </div>
  );
}
