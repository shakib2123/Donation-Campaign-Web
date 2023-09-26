import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import DonationDetail from "./DonationDetail";

const DonationDetails = () => {
  const [donation, setDonation] = useState();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donations = useLoaderData();

  useEffect(() => {
    const findDonation = donations.find((donation) => donation.id === idInt);
    setDonation(findDonation);
  }, [donations, idInt]);

  return (
    <div className="max-w-7xl mx-auto">
      <DonationDetail donation={donation}></DonationDetail>
    </div>
  );
};

export default DonationDetails;
