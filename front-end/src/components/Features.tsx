import Lightning from "../assets/img/lightning.svg";

export default function Features() {
  const features = [
    "Take user orders form online",
    "Create your shop profile",
    "Manage your store",
    "Get more orders",
    "Storage shed",
  ];
  return (
    <section className="overflow-hidden">
      <div className="flex gap-[40px]  flex-nowrap justify-center">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-[8px] whitespace-nowrap">
            <img src={Lightning} alt="Lightning" />
            <h3
              className="font-semibold text-primaryText text-[14px] leading-[18px] 
             tablet:text-[16px] tablet:leading-[20px]"
            >
              {feature}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
