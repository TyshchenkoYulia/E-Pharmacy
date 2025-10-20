import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="text-center">
      <p className="text-[20px] text-primaryText font-semibold">
        Your cart is empty
      </p>
      <p className="text-[18px] text-secondaryText mb-[30px]">
        You haven’t added any products yet.
      </p>
      <Link
        to="/medicine"
        className=" text-greenPrimary text-[20px] underline underline-offset-4
              transition-transform hover:scale-110 hover:text-hoverGreen"
      >
        Continue shopping
      </Link>
    </div>
  );
}
