import HFirstTree from "./components/homepage/HFirstTree";
import HSecTree from "./components/homepage/HSecTree";
import Doodle from "./components/molecules/Doodle";
import Navbar from "./components/molecules/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HFirstTree />
      <HSecTree />
      <Doodle />
      
    </div>
  );
}
