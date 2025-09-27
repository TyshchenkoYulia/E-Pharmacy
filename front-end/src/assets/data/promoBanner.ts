import type { PromoBanner } from "../../types/promoTypes";

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

export default banners;
