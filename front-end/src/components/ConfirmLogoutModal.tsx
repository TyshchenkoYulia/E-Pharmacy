import { useEffect } from "react";
import Modal from "react-modal";
import CloseIcon from "@mui/icons-material/Close";

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
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onCancel();
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onCancel]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      overlayClassName="fixed inset-0 bg-secondaryText bg-opacity-50 flex items-center justify-center z-50"
      className="relative bg-whitePrimary rounded-[20px] shadow-lg 
      w-[463px] py-[50px] px-[70px] "
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

      <div className="flex gap-4 w-full mt-2">
        <button
          onClick={onCancel}
          className="w-[335px] h-[44px] bg-greenPrimary text-whitePrimary 
                   font-semibold rounded-[60px] 
                  transition-transform hover:scale-110 hover:text-hoverGreen"
        >
          No
        </button>
        <button
          onClick={onConfirm}
          className="w-[335px] h-[44px] bg-greenPrimary text-whitePrimary 
                   font-semibold rounded-[60px] 
                  transition-transform hover:scale-110 hover:text-hoverGreen"
        >
          Yes
        </button>
      </div>
    </Modal>
  );
}
