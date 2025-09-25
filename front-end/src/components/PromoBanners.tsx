import { useNavigate } from "react-router-dom";

interface PromoBanner {
  title: string;
  subtitle: string;
  buttonText: string;
  type: "discount" | "info";
  value?: number;
  link: string;
}

const banners: PromoBanner[] = [
  {
    title: "Huge Sale",
    subtitle: "70%",
    buttonText: "Shop now",
    type: "discount",
    value: 70,
    link: "/search?discount=70",
  },
  {
    title: "Secure delivery",
    subtitle: "100%",
    buttonText: "Read more",
    type: "info",
    link: "/feature",
  },
  {
    title: "Off",
    subtitle: "35%",
    buttonText: "Shop now",
    type: "discount",
    value: 35,
    link: "/search?discount=35",
  },
];

export default function PromoBanners() {
  const navigate = useNavigate();

  const handleClick = (banner: PromoBanner) => {
    if (banner.type === "discount" && banner.value) {
      // якщо банер типу "discount" → робимо запит на бек

      console.log(`Search products with discount ${banner.value}%`);
    }
    navigate(banner.link);
  };

  return (
    <section
      className="flex flex-col justify-center items-center gap-[16px] 
    my-[40px] mx-[20px] 
    tablet:gap-[24px] tablet:grid tablet:grid-cols-2 tablet:justify-items-center
     desktop:grid-cols-3"
    >
      {banners.map((banner, index) => (
        <div
          key={index}
          className="  bg-whitePrimary rounded-[20px] h-[126px] w-[334px] 
                     flex flex-start  gap-[30px] items-center py-[14px] px-[18px]
                     hover:shadow-lg transition
                     tablet:h-[166px] tablet:w-[320px]"
        >
          <div className="flex flex-col gap-[14px]">
            <div
              className="text-[24px] leading-[24px] w-10 h-10 rounded-full 
                       bg-grayColor flex items-center justify-center 
                       text-greenPrimary 
                       tablet:text-[28px] tablet:leading-[28px]"
            >
              {index + 1}
            </div>
            <p
              className="text-[24px] leading-[24px] font-500 
            tablet:text-[36px] tablet:leading-[36px]"
            >
              {banner.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-[30px] ">
            <h3 className="text-[16px] leading-[18px] tablet:text-[20px] tablet:leading-[24px]">
              {banner.title}
            </h3>
            <button
              onClick={() => handleClick(banner)}
              className="text-[13px] leading-[16px] rounded-[40px] text-secondaryText
                       transition-transform hover:scale-110 hover:text-hoverGreen"
            >
              {banner.buttonText}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
