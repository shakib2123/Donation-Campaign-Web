import swal from "sweetalert";
const DonationDetail = ({ donation }) =>
{
  
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

    

  return (
    <div className="mb-10 px-2">
      <div className="h-64 md:h-96 lg:h-[500px] mx-auto relative">
        <img className="h-full w-full rounded-lg" src={picture} alt="" />
        <div className="hero-overlay h-auto px-4 py-5 absolute bottom-0">
          <button style={cardStyle} className="btn text-white font-bold">
            Donate ${price}
          </button>
        </div>
        <div className="my-4 space-y-4">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
  }

export default DonationDetail;
