import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import type { LoginFormData, LoginResponseDto } from "../types/authTypes";

export default function LoginForm() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      setMessage(null);
      setErrorMessage(null);

      const response = await axios.post<LoginResponseDto>(
        "http://localhost:3000/api/auth/login",
        data
      );

      setMessage(response.data.message);

      // Зберігаємо токен
      localStorage.setItem("token", response.data.token);

      if (response.data.name) {
        localStorage.setItem("userName", response.data.name);
      }

      // Передаємо ім’я користувача в  Header
      navigate("/", { state: { userName: response.data.name } });

      reset();

      console.log("Успішний вхід!", response.data.name);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.message || "Помилка при вході");
      } else if (error instanceof Error) {
        setErrorMessage(error.message);
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

      {/* Error or success messages */}
      {errorMessage && (
        <p className="text-redText text-sm text-center mt-2">{errorMessage}</p>
      )}
      {message && (
        <p className="text-greenPrimary text-sm text-center mt-2">{message}</p>
      )}

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
