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
      className="mx-auto flex flex-col gap-6 items-center  desktop:pt-[50px]"
    >
      {/* Email */}
      <div className="relative w-[335px] max-w-full">
        <input
          type="email"
          placeholder="Email address"
          {...register("email", { required: "Email is required" })}
          className="w-full h-[44px] px-4 bg-whitePrimary border border-grayColor 
                     rounded-[60px] outline-none"
        />
        {errors.email && (
          <span className="absolute left-4 top-[48px] text-redText text-[10px]">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* Password */}
      <div className="relative w-[335px] max-w-full">
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className="w-full h-[44px] px-4 bg-whitePrimary border border-grayColor 
                     rounded-[60px] outline-none"
        />
        {errors.password && (
          <span className="absolute left-4 top-[48px] text-redText text-[10px]">
            {errors.password.message}
          </span>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="w-[335px] h-[44px] bg-greenPrimary text-whitePrimary 
                   font-semibold rounded-[60px] 
                  transition-transform hover:scale-110 hover:text-hoverGreen"
      >
        Login
      </button>

      {/* Register link */}
      <p className="text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <Link
          to="/register"
          className="text-greenPrimary font-semibold relative z-10"
        >
          Register
        </Link>
      </p>
    </form>
  );
}
