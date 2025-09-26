import LoginForm from "../components/LoginForm";
import RegisterContent from "../components/RegisterContent";
import BgIcon1 from "../assets/img/bg-icon-1.svg";
import BgIcon2 from "../assets/img/bg-icon-2.svg";
import BgIcon3 from "../assets/img/bg-icon-3.svg";

export default function LoginPage() {
  return (
    <div
      className="relative min-h-screen flex flex-col desktop:flex-row 
        desktop:justify-center desktop:items-start desktop:gap-[54px]"
    >
      <div className="">
        <RegisterContent />
      </div>
      <div className="desktop:mt-[288px]">
        <LoginForm />
      </div>
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
    </div>
  );
}
