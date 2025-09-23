import RegisterContent from "../components/RegisterContent";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <div
      className="min-h-screen flex flex-col desktop:flex-row 
    desktop:justify-center desktop:items-start desktop:gap-[54px]"
    >
      <div className="">
        <RegisterContent />
      </div>
      <div className="desktop:mt-[288px]">
        <RegisterForm />
      </div>
    </div>
  );
}
