import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import type { RegisterFormData, RegisterResponseDto } from "../types/authTypes";
import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormData>();

  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setMessage(null);
      setErrorMessage(null);

      const payload = {
        name: data.username,
        email: data.email,
        phone: data.phone,
        password: data.password,
      };

      const response = await axios.post<RegisterResponseDto>(
        "http://localhost:3000/api/auth/register",
        payload
      );

      console.log("Register data:", data);

      setMessage(response.data.message);

      navigate("/", { state: { userName: payload.name } });

      reset();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(
          error.response?.data?.message || "Помилка при реєстрації"
        );
      } else {
        setErrorMessage("Невідома помилка");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto flex flex-col gap-6 items-center desktop:pt-[50px]"
    >
      {/* Username */}
      <div className="relative w-[335px] max-w-full">
        <input
          type="text"
          placeholder="User Name"
          {...register("username", { required: "User Name is required" })}
          className="w-full h-[44px] px-4 bg-whitePrimary border border-grayColor 
                     rounded-[60px] outline-none"
        />
        {errors.username && (
          <span className="absolute left-4 top-[48px] text-redText text-[10px]">
            {errors.username.message}
          </span>
        )}
      </div>

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

      {/* Phone */}
      <div className="relative w-[335px] max-w-full">
        <input
          type="tel"
          placeholder="Phone number"
          {...register("phone", { required: "Phone number is required" })}
          className="w-full h-[44px] px-4 bg-whitePrimary border border-grayColor 
                     rounded-[60px] outline-none"
        />
        {errors.phone && (
          <span className="absolute left-4 top-[48px] text-redText text-[10px]">
            {errors.phone.message}
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
        className="z-10 w-[335px] h-[44px] bg-greenPrimary text-whitePrimary 
                   font-semibold rounded-[60px] 
                  transition-transform hover:scale-110 hover:text-hoverGreen"
      >
        Register
      </button>

      {message && <p className="text-greenPrimary mt-2">{message}</p>}
      {errorMessage && <p className="text-redText mt-2">{errorMessage}</p>}

      {/* Login link */}
      <p className="text-center text-sm text-gray-600 ">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-greenPrimary font-semibold relative z-10"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
