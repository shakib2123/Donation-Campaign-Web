const AllDonation = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
    price,
  } = donation;
  const cardStyle = {
    backgroundColor: { backgroundColor: card_bg_color },
    categoryStyle: {
      backgroundColor: category_bg_color,
      color: text_button_bg_color,
    },
    textColor: { color: text_button_bg_color },
    btnBg: { backgroundColor: text_button_bg_color },
  };

  return (
    <div
      style={cardStyle.backgroundColor}
      className="md:flex items-center gap-8 rounded-lg"
    >
      <div className="h-56 w-56">
        <img className="rounded-l-lg h-full w-full" src={picture} alt="" />
      </div>
      <div className="space-y-3">
        <p
          style={cardStyle.categoryStyle}
          className="rounded-lg text-lg w-fit p-2"
        >
          {category}
        </p>
        <h2 className="font-semibold text-2xl">{title}</h2>
        <h3 style={cardStyle.textColor} className="text-xl font-medium">
          ${price}
        </h3>
        <button
          style={cardStyle.btnBg}
          className="text-white rounded-lg px-6 py-3 font-medium text-xl"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default AllDonation;
