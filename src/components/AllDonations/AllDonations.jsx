import { useEffect, useState } from "react";
import AllDonation from "./AllDonation";

const AllDonations = () => {
  const [donations, setDonations] = useState([]);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const allDonations = JSON.parse(localStorage.getItem("donations"));
    if (allDonations) {
      setDonations(allDonations);
    }
  }, []);
  console.log(donations);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {isShow
          ? donations.map((donation) => (
              <AllDonation key={donation.id} donation={donation}></AllDonation>
            ))
          : donations
              ?.slice(0, 4)
              .map((donation) => (
                <AllDonation
                  key={donation.id}
                  donation={donation}
                ></AllDonation>
              ))}
      </div>
      <div className="flex justify-center my-6">
        <button
          onClick={() => setIsShow(!isShow)}
          className="btn text-lg  text-white bg-[#009444] hover:bg-[#00cc5f]"
        >
          {!isShow ? "See All" : "See Less"}
        </button>
      </div>
    </div>
  );
};

export default AllDonations;
