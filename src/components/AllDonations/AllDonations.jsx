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
      {donations.length > 0 ? (
        <div className="flex justify-center my-6">
          {!isShow ? (
            <button
              onClick={() => setIsShow(!isShow)}
              className="btn text-lg  text-white bg-[#009444] hover:bg-[#00cc5f]"
            >
              See All
            </button>
          ) : (
            ""
          )}
        </div>
      ) : (
        <h1 className="text-4xl font-medium text-center">
          Nothing donated by you.
        </h1>
      )}
    </div>
  );
};

export default AllDonations;
