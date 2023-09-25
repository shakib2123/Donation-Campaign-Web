import Donation from "../Donation/Donation";

const Donations = ({ donations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8 p-3">
      {donations.map((donation) => (
        <Donation key={donation.id} donation={donation}></Donation>
      ))}
    </div>
  );
};

export default Donations;
