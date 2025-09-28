import Modal from "react-modal";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

Modal.setAppElement("#root");

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Login data:", data);

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-secondaryText bg-opacity-50 flex items-center justify-center z-50"
      className="relative bg-whitePrimary rounded-[20px] shadow-lg w-[463px] py-[50px] px-[70px] 
"
    >
      <h2 className="text-[20px] font-bold text-center text-primaryText mb-[16px]">
        Log in to your account
      </h2>
      <p className="text-secondaryText text-center mb-[24px]">
        Please login to your account before continuing.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg mx-auto flex flex-col gap-4"
      >
        {/* Email */}
        <input
          type="email"
          placeholder="Email address"
          {...register("email", { required: "Email is required" })}
          className="w-[335px] max-w-full h-[44px] px-4 bg-whitePrimary border
           border-grayColor rounded-[60px] outline-none mx-auto"
        />
        {errors.email && (
          <span className="text-redText text-sm text-center">
            {errors.email.message}
          </span>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
          className="w-[335px] max-w-full h-[44px] px-4 bg-whitePrimary border
           border-grayColor rounded-[60px] outline-none mx-auto"
        />
        {errors.password && (
          <span className="text-redText text-sm text-center">
            {errors.password.message}
          </span>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-[335px] h-[44px] bg-greenPrimary text-whitePrimary 
        font-semibold rounded-[60px] mt-2 mx-auto tablet:w-[280px] 
        transition-transform hover:scale-110 hover:text-hoverGreen"
        >
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-greenPrimary font-semibold 
            transition-transform hover:scale-110 hover:text-hoverGreen"
          >
            Register
          </Link>
        </p>
      </form>
      <div
        className="absolute top-[20px] right-[20px] text-primaryText 
      transition-transform hover:scale-110 hover:text-hoverGreen"
      >
        <CloseIcon onClick={onClose} />
      </div>
    </Modal>
  );
}
