import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);

    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg mx-auto flex flex-col gap-4 "
    >
      <input
        type="email"
        placeholder="Email address"
        {...register("email", { required: "Email is required" })}
        className="w-[335px] max-w-full h-[44px] px-4 bg-whitePrimary border
           border-grayColor rounded-[60px] outline-none mx-auto"
      />
      {errors.email && (
        <span className="text-red-500 text-sm col-span-full text-center tablet:text-left">
          {errors.email.message}
        </span>
      )}

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: "Password is required" })}
        className="w-[335px] max-w-full h-[44px] px-4 bg-whitePrimary border
           border-grayColor rounded-[60px] outline-none mx-auto"
      />
      {errors.password && (
        <span className="text-red-500 text-sm col-span-full text-center tablet:text-left">
          {errors.password.message}
        </span>
      )}

      <button
        type="submit"
        className="w-[335px] h-[44px] bg-greenPrimary text-whitePrimary 
        font-semibold rounded-[60px] mt-2 mx-auto tablet:w-[280px] 
        transition-transform hover:scale-110 hover:text-hoverGreen"
      >
        Login
      </button>

      <p className="text-center text-sm text-gray-600 col-span-full">
        Don’t have an account?{" "}
        <Link to="/register" className="text-greenPrimary font-semibold">
          Register
        </Link>
      </p>
    </form>
  );
}
