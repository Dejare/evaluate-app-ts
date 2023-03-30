const FeatureCard = ({
  bg,
  featureText,
  featureHeading,
  imgSrc,
}: {
  bg: string;
  featureText: string;
  imgSrc: string;
  featureHeading: string;
}) => {
  return (
    <div
      className="md:w-2/6 w-full h-[100%] rounded-xl m-6 relative"
      style={{ backgroundColor: `${bg}` }}
    >
      <h2 className="text-center text-white text-4xl font-bold mt-8">
        {featureHeading}
      </h2>
      <p className="text-white p-5 text-center pt-0 mt-2">{featureText}</p>
      <div className=" w-3/5 flex items-center m-auto">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
};

export default FeatureCard;
