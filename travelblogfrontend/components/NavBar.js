import Image from "next/image";
import Link from "next/link";
import logo from "../public/Travelling_Hobo-bgremoved.png";

const navBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-item-container">
        <Link href="/">
          <Image src={logo} alt="Travel Badge" width={140} height={140} />
        </Link>
      </div>
      <div className="nav-item-container">
        <p>HOME</p>
      </div>
    </nav>
  );
};
export default navBar;
