import type { LoginFormData, LoginResponseDto } from "../types/authTypes";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

Modal.setAppElement("#root");

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>();

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const onSubmit = async (data: LoginFormData) => {
    try {
      setErrorMessage(null);
      setSuccessMessage(null);

      const response = await axios.post<LoginResponseDto>(
        "http://localhost:3000/api/auth/login",
        data
      );

      setSuccessMessage(response.data.message);

      // Зберігаємо токен, ім’я та Id
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userName", response.data.name);
      localStorage.setItem("userId", response.data.userId.toString());

      onClose();

      navigate("/", { state: { userName: response.data.name } });

      reset();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data?.message || "Error logging in");
      } else if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Unknown error");
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-secondaryText bg-opacity-50 flex items-center justify-center z-50"
      className="relative bg-whitePrimary rounded-[20px] shadow-lg w-[463px] py-[50px] px-[70px]"
    >
      <h2 className="text-[20px] font-bold text-center text-primaryText mb-[16px]">
        Log in to your account
      </h2>
      <p className="text-secondaryText text-center mb-[24px]">
        Please login to your account before continuing.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex flex-col gap-6 items-center"
      >
        <div className="relative w-[335px] max-w-full">
          <input
            type="email"
            placeholder="Email address"
            {...register("email", { required: "Email is required" })}
            className="w-full h-[44px] px-4 bg-whitePrimary border border-grayColor rounded-[60px] outline-none"
          />
          {errors.email && (
            <span className="absolute left-4 top-[48px] text-redText text-[10px]">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="relative w-[335px] max-w-full">
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="w-full h-[44px] px-4 bg-whitePrimary border border-grayColor rounded-[60px] outline-none"
          />
          {errors.password && (
            <span className="absolute left-4 top-[48px] text-redText text-[10px]">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-[335px] h-[44px] bg-greenPrimary text-whitePrimary font-semibold rounded-[60px] transition-transform hover:scale-110 hover:text-hoverGreen"
        >
          Login
        </button>

        {errorMessage && (
          <p className="text-redText text-sm text-center mt-2">
            {errorMessage}
          </p>
        )}
        {successMessage && (
          <p className="text-greenPrimary text-sm text-center mt-2">
            {successMessage}
          </p>
        )}

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

      <div className="absolute top-[20px] right-[20px] text-primaryText transition-transform hover:scale-110 hover:text-hoverGreen">
        <CloseIcon onClick={onClose} />
      </div>
    </Modal>
  );
}
