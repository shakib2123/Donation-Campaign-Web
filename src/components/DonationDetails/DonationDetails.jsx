import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
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

  return <div>
    <DonationDetail donation={donation}></DonationDetail>
  </div>;
};

export default DonationDetails;
