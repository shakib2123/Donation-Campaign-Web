const Banner = () => {
  return (
    <div className="flex justify-center items-center h-80 banner-container p-3">
      <div
        className="hero h-80 rounded-lg"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR1iHjVSDlr0IdVaROO5H5jLL55Nlqc7etzJl89zd14a68j7Mt8X96F19Vw)",
        }}
      >
        <div className="hero-overlay bg-opacity-70 rounded-lg"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-3xl md:text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>
            <div className="join">
              <input
                className="input md:w-96 input-bordered join-item"
                placeholder="Search here...."
              />
              <button className="btn join-item rounded-r-lg bg-[#FF444A] hover:bg-[#ff0e16] text-white font-medium">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
