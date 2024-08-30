//<Home></Home>
import Link from "next/link";
import Home from "../components/home"
import HomeTablet from "../components/homeTablet"
export default function Page() {
  return (
    <div>
     
      <HomeTablet></HomeTablet>
      <Link href="/"> </Link>
      </div>
    
  );
}
