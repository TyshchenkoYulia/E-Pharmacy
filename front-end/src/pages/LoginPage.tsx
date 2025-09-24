import LoginForm from "../components/LoginForm";
import RegisterContent from "../components/RegisterContent";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen flex flex-col desktop:flex-row 
        desktop:justify-center desktop:items-start desktop:gap-[54px]"
    >
      <div className="">
        <RegisterContent />
      </div>
      <div className="desktop:mt-[288px]">
        <LoginForm />
      </div>
    </div>
  );
}
