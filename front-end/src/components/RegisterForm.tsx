import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

interface RegisterFormData {
  username: string;
  email: string;
  phone: string;
  password: string;
}

export default function RegisterForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log("Register data:", data);

    navigate("/login");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg mx-auto flex flex-col gap-4 "
    >
      <div className="flex flex-col gap-4 tablet:flex-row tablet:gap-[14px]">
        <input
          type="text"
          placeholder="User Name"
          {...register("username", { required: "User Name is required" })}
          className="w-[335px] max-w-full h-[44px] px-4 bg-whitePrimary border
           border-grayColor rounded-[60px] outline-none mx-auto"
        />
        {errors.username && (
          <span className="text-red-500 text-sm col-span-full text-center tablet:text-left">
            {errors.username.message}
          </span>
        )}

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
      </div>

      <div className="flex flex-col gap-4 tablet:flex-row tablet:gap-[14px]">
        <input
          type="tel"
          placeholder="Phone number"
          {...register("phone", { required: "Phone number is required" })}
          className="w-[335px] max-w-full h-[44px] px-4 bg-whitePrimary border
           border-grayColor rounded-[60px] outline-none mx-auto"
        />

        {errors.phone && (
          <span className="text-red-500 text-sm col-span-full text-center tablet:text-left">
            {errors.phone.message}
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
      </div>

      <button
        type="submit"
        className="w-[335px] h-[44px] bg-greenPrimary text-whitePrimary 
        font-semibold rounded-[60px] mt-2 mx-auto tablet:w-[280px]"
      >
        Register
      </button>

      <p className="text-center text-sm text-gray-600 col-span-full">
        Already have an account?{" "}
        <Link to="/login" className="text-greenPrimary font-semibold">
          Login
        </Link>
      </p>
    </form>
  );
}
