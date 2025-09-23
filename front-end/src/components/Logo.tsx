import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" />
      <span>E-Pharmacy</span>
    </Link>
  );
}
