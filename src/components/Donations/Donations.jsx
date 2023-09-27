import { useState } from "react";
import Donation from "../Donation/Donation";
const Donations = ({ donations }) => {
  const [searchedDonation, setSearchedDonation] = useState(null);
  const [error, setError] = useState(null);
const handleSearch = () => {
  const searchCategory = document.getElementById("category-input").value;

  if (searchCategory === "") {
    setError("Please enter a category name for the search.");
    setSearchedDonation(null);
  } else {
    const foundDonations = donations?.filter(
      (donation) => donation.category === searchCategory
    );

    if (foundDonations.length > 0) {
      setError(null);
      setSearchedDonation(foundDonations);
    } else {
      setError("No donation found for the entered category.");
      setSearchedDonation(null);
    }
  }
};


  return (
    <div>
      <div>
        <div className="flex justify-center items-center h-80 banner-container">
          <div className="hero h-80">
            <div
              className="h-80 w-full bg-cover bg-no-repeat opacity-30"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR1iHjVSDlr0IdVaROO5H5jLL55Nlqc7etzJl89zd14a68j7Mt8X96F19Vw)",
              }}
            ></div>

            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold text-black">
                  I Grow By Helping People In Need
                </h1>
                <div className="join">
                  <input
                    id="category-input"
                    className="input md:w-96 input-bordered text-black join-item"
                    placeholder="Search here...."
                  />

                  <button
                    onClick={() => handleSearch()}
                    className="btn join-item rounded-r-lg bg-[#FF444A] hover:bg-[#ff0e16] text-white font-medium"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {error && (
          <p className="text-red-500 text-center mt-2 text-xl">{error}</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8 p-3">
          {searchedDonation !== null
            ? searchedDonation.map((donation) => (
                <Donation key={donation.id} donation={donation} />
              ))
            : !error &&
              donations.map((donation) => (
                <Donation key={donation.id} donation={donation} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Donations;
