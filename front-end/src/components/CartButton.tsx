import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface CartButtonProps {
  size?: string;
  bgClass?: string;
  textClass?: string;
}

const CartButton: React.FC<CartButtonProps> = ({
  size = "w-10 h-10",
  bgClass = "bg-whitePrimary",
  textClass = "text-greenPrimary",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
  };

  return (
    <button
      onClick={handleClick}
      className={`${size} ${bgClass} flex items-center justify-center ${textClass} cursor-pointer rounded-full`}
    >
      <ShoppingCartIcon />
    </button>
  );
};

export default CartButton;
