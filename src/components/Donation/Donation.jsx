import { Link } from "react-router-dom";
import DonationsDetails from "../DonationDetails/DonationDetails";

const Donation = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
  } = donation;
  const cardStyle = {
    backgroundColor: { backgroundColor: card_bg_color },
    categoryStyle: {
      backgroundColor: category_bg_color,
      color: text_button_bg_color,
    },
    textColor: { color: text_button_bg_color },
  };

  return (
    <Link to={`/donation/${id}`}>
      <div>
        <div style={cardStyle.backgroundColor} className="card">
          <figure className="h-52 w-full">
            <img className="h-full w-full" src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <p
              style={cardStyle.categoryStyle}
              className=" py-2 text-left rounded-lg w-fit p-2 font-medium"
            >
              {category}
            </p>
            <h2 style={cardStyle.textColor} className="card-title">{title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Donation;
