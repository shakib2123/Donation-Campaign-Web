const AllDonations = () => {
  const allDonations = JSON.parse(localStorage.getItem("donations"));
  console.log(allDonations);
  return <div></div>;
};

export default AllDonations;
