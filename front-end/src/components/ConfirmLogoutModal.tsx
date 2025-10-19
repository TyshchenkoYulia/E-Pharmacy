import type { DeleteUserResponseDto } from "../types/authTypes";
import { useState } from "react";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

interface ConfirmLogoutModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmLogoutModal({
  isOpen,
  onConfirm,
  onCancel,
}: ConfirmLogoutModalProps) {
  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");

    window.location.href = "/";
  };

  const handleDeleteAccount = async () => {
    try {
      setMessage(null);
      setErrorMessage(null);

      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!token || !userId) {
        setErrorMessage("User not found or not authorized.");
        return;
      }

      const response = await axios.delete<DeleteUserResponseDto>(
        `http://localhost:3000/api/auth/delete/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setMessage(response.data.message);

      // очищення
      localStorage.removeItem("token");
      localStorage.removeItem("userName");
      localStorage.removeItem("userId");

      onConfirm();
      window.location.href = "/";
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(
          error.response?.data?.message || "Error deleting account"
        );
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
      onRequestClose={onCancel}
      overlayClassName="fixed inset-0 bg-secondaryText bg-opacity-50 flex items-center justify-center z-50"
      className="relative bg-whitePrimary rounded-[20px] shadow-lg 
      w-[463px] py-[50px] px-[70px]"
    >
      <div
        className="absolute top-4 right-4 cursor-pointer transition-transform hover:scale-110"
        onClick={onCancel}
      >
        <CloseIcon />
      </div>

      <h2 className="text-[20px] font-bold text-center text-primaryText mb-[16px]">
        Are you sure you want to log out?
      </h2>

      <div className="flex flex-col gap-4 w-full mt-4">
        <div className="flex gap-4 justify-center">
          <button
            onClick={onCancel}
            className="w-[150px] h-[44px] bg-grayColor text-whitePrimary 
                     font-semibold rounded-[60px] 
                     transition-transform hover:scale-110"
          >
            No
          </button>
          <button
            onClick={handleLogout}
            className="w-[150px] h-[44px] bg-greenPrimary text-whitePrimary 
                     font-semibold rounded-[60px] 
                     transition-transform hover:scale-110 hover:text-hoverGreen"
          >
            Yes
          </button>
        </div>

        <button
          onClick={handleDeleteAccount}
          className="mt-[30px]  text-greenPrimary font-semibold 
                     transition-transform hover:scale-110 hover:text-hoverGreen"
        >
          Delete account
        </button>

        {errorMessage && (
          <p className="text-redText text-sm text-center mt-2">
            {errorMessage}
          </p>
        )}
        {message && (
          <p className="text-greenPrimary text-sm text-center mt-2">
            {message}
          </p>
        )}
      </div>
    </Modal>
  );
}
