import RegisterContent from "../components/RegisterContent";
import RegisterForm from "../components/RegisterForm";
import BgIcon1 from "../assets/img/bg-icon-1.svg";
import BgIcon2 from "../assets/img/bg-icon-2.svg";
import BgIcon3 from "../assets/img/bg-icon-3.svg";

export default function RegisterPage() {
  return (
    <section
      className="pt-[120px] pb-[80px] px-[20px] 
    tablet:pt-[170px] tablet:pb-[130px] tablet:px-[32px] 
     relative min-h-screen desktop:flex
    desktop:justify-center desktop:items-start desktop:gap-[54px]"
    >
      <RegisterContent />

      <RegisterForm />

      <img
        src={BgIcon1}
        alt="Background Icon"
        className="absolute bottom-8 right-0  w-[450px] h-[250px]"
      />
      <img
        src={BgIcon2}
        alt="Background Icon"
        className="absolute bottom-20 right-0   w-[250px] h-[250px]"
      />
      <img
        src={BgIcon3}
        alt="Background Icon"
        className="absolute -bottom-16 right-0   w-[350px] h-[250px]"
      />
    </section>
  );
}
