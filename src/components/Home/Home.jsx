import { useLoaderData } from "react-router-dom";
import Donations from "../Donations/Donations";
import Banner from "../Header/Banner/Banner";

const Home = () =>
{
    const donations = useLoaderData();
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Banner></Banner>
        <Donations donations={donations}></Donations>
      </div>
    </div>
  );
};

export default Home;
