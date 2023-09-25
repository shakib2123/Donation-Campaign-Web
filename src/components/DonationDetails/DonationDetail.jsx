import swal from "sweetalert";
const DonationDetail = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
    description,
    price,
  } = donation || {};
  const cardStyle = {
    backgroundColor: text_button_bg_color,
  };

  const handleDonation = () => {
    const donationsArray = [];

    const allDonations = JSON.parse(localStorage.getItem("donations"));
    if (!allDonations) {
      donationsArray.push(donation);
      localStorage.setItem("donations", JSON.stringify(donationsArray));
      swal("Good job!", "Your donation successfully completed!", "success");
    } else {
      const isExits = allDonations.find(
        (donation) => donation.id === id
      );

      if (!isExits) {
        donationsArray.push(...allDonations, donation);
        localStorage.setItem("donations", JSON.stringify(donationsArray));
        swal("Good job!", "Your donation successfully completed!", "success");
      } else {
        swal("Error!", "You already donated !", "error");
      }
    }
  };

  return (
    <div className="mb-56 px-2">
      <div className="h-64 md:h-96 lg:h-[500px] mx-auto relative">
        <img className="h-full w-full rounded-lg" src={picture} alt="" />
        <div className="hero-overlay rounded-b-lg h-auto px-4 py-5 absolute bottom-0">
          <button
            onClick={handleDonation}
            style={cardStyle}
            className="btn text-white font-bold"
          >
            Donate ${price}
          </button>
        </div>
        <div className="my-4 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DonationDetail;
