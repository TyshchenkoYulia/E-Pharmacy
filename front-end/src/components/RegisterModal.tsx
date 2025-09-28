import Modal from "react-modal";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";

Modal.setAppElement("#root");

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RegisterFormInputs {
  username: string;
  email: string;
  phone: string;
  password: string;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit = (data: RegisterFormInputs) => {
    console.log("Register form data:", data);
    // тут твій запит до бекенду
  };

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-secondaryText bg-opacity-50 flex items-center justify-center z-50"
      className="relative bg-whitePrimary rounded-[20px] shadow-lg w-[463px] py-[50px] px-[70px] 
      tablet:w-[400px]"
    >
      <h2 className="text-[20px] font-bold text-center text-primaryText mb-[16px]">
        Create your account
      </h2>
      <p className="text-secondaryText text-center mb-[24px]">
        Please fill in the details to register.
      </p>

      {/* форма */}
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
            <span className="text-redText text-sm text-center">
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
            <span className="text-redText text-sm text-center">
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
            <span className="text-redText text-sm text-center">
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
            <span className="text-redText text-sm text-center">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-[335px] h-[44px] bg-greenPrimary text-whitePrimary 
          font-semibold rounded-[60px] mt-2 mx-auto 
          tablet:w-[280px] transition-transform hover:scale-110 hover:text-hoverGreen"
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
      <div
        className="absolute top-[20px] right-[20px] text-primaryText 
      transition-transform hover:scale-110 hover:text-hoverGreen"
      >
        <CloseIcon onClick={onClose} />
      </div>
    </Modal>
  );
}
