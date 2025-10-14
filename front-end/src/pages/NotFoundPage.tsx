import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center px-4">
      <h1 className="text-[48px] font-bold text-primaryText mb-4 tablet:text-[64px]">
        404
      </h1>
      <p className="text-[18px] text-secondaryText mb-6 tablet:text-[20px]">
        Page not found
      </p>
      <Link
        to="/"
        className="inline-block bg-greenPrimary text-whitePrimary font-semibold rounded-[60px] px-6 py-3 transition-transform hover:scale-105 hover:text-hoverGreen"
      >
        Go Home
      </Link>
    </div>
  );
}
