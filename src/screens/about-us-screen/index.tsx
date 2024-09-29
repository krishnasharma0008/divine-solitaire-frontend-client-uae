import Image from "next/image";

const AboutUsScreen: React.FC = () => {
  const mission_excel = [
    {
      icon: "yes",
      text: "Divine Solitaires is fully commited to bring the most beautiful, finely crafted",
    },
    {
      icon: "no",
      text: "diamonds to its customers and, therefore, guarantees each of its diamond to be of the highest",
    },
    {
      icon: "no",
      text: "standards of craftsmanship to reveal maximum brilliance, fire and scintillation.",
    },
    {
      icon: "yes",
      text: "Every Divine Solitaires diamond and jewellery passes through strict quality control measures",
    },
    {
      icon: "no",
      text: "which have been specially designed to ensure that our privileged customer is fully satisfied beyond",
    },
    {
      icon: "no",
      text: "industry standards. We take pride in the fact that our diamonds are graded on very stringent",
    },
    {
      icon: "no",
      text: "standards and with the highest level consistency.",
    },
    {
      icon: "yes",
      text: "We are specialists solitaire jewellery, and have an amazing range ofinfinitely customisable",
    },
    {
      icon: "no",
      text: "jewellery that customers can make their own. We are continuously innovating and launching new",
    },
    {
      icon: "no",
      text: "and trendy designs for ourdiscerning customers across India.",
    },
    {
      icon: "yes",
      text: "We guarantee complete transparency and standardizationour pricing quality. We have transformed",
    },
    {
      icon: "no",
      text: "the experience of buying solitaire diamond jewellery, and have empowered our customers with",
    },
    {
      icon: "no",
      text: "complete information onthe entire value chain. Our unmatched features enhance customer trust",
    },
    {
      icon: "no",
      text: "andcomfort that give complete assurance and peace of mind.",
    },
    {
      icon: "yes",
      text: "At Divine Solitaires, we guarantee you an experience beyond expectation thatyou so rightly",
    },
    {
      icon: "no",
      text: "deserve.",
    },
  ];
  return (
    <>
      <div
        className="bg-cover bg-center h-[550px] flex flex-col-reverse lg:flex-row items-center justify-center text-white text-center"
        style={{ backgroundImage: 'url("/aboutusbgimage.png")' }}
      >
        <div className="w-full sm:w-full md:w-full lg:w-2/3">
          <span
            className="block font-normal text-xl sm:text-xl md:text-3xl lg:text-5xl leading-8 lg:leading-[61.97px] mb-px"
            style={{ fontFamily: "Frank Ruhl Libre" }}
          >
            ONLY THE BEST AND THE BRIGHTEST
          </span>
          <span
            className="block font-normal text-xs sm:text-xs md:text-xl lg:text-2xl leading-6 lg:leading-8"
            style={{ fontFamily: "Frank Ruhl Libre" }}
          >
            THE MOST BEAUTIFUL DIAMONDS BECOME DIVINE SOLITAIRES
          </span>
        </div>
        <div className="w-full sm:w-full md:w-full lg:w-1/3 flex justify-center items-center">
          <Image
            src="/diamond-anoutus.png"
            alt="Image Description"
            height={520}
            width={612}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mt-16 flex flex-col justify-center items-center px-2">
        <span
          className="w-full font-medium text-4xl lg:text-5xl xl:text-6xl leading-tight text-black text-center"
          style={{ fontFamily: "Frank Ruhl Libre" }}
        >
          OUR FOUNDERS
        </span>
        <div className="w-full flex flex-col lg:flex-row mt-8">
          <div className="lg:w-1/2 flex flex-col justify-center items-center mb-8 lg:mb-0">
            <Image
              src="/jignesh_mehta.png"
              alt="Jignesh Mehta"
              height={444}
              width={444}
              className="border mb-4"
              onError={(e) => {
                const imgElement = e.target as HTMLImageElement;
                imgElement.src = "/Empty.jpg"; // Replace with your placeholder image URL
              }}
            />
            <div className="lg:w-3/4 flex flex-col text-center lg:text-left px-4">
              <span
                className="capitalize font-normal text-xl lg:text-2xl leading-normal not-italic"
                style={{ fontFamily: "Frank Ruhl Libre" }}
              >
                Jignesh Mehta
              </span>
              <span
                className="capitalize font-normal text-xl lg:text-2xl leading-normal not-italic"
                style={{ fontFamily: "Frank Ruhl Libre" }}
              >
                Founder & Managing Director
              </span>
              <span
                className="capitalize font-normal text-sm lg:text-xl leading-normal text-justify"
                style={{ fontFamily: "Frank Ruhl Libre" }}
              >
                Mr Jignesh Mehta, a true visionary, felt the need for organized
                diamond marketing. This need led to the foundation of Divine
                Solitaire in 2006.
              </span>
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center items-center">
            <Image
              src="/shalien_mehta.png"
              alt="Shailen Mehta"
              height={444}
              width={444}
              className="border mb-4"
              onError={(e) => {
                const imgElement = e.target as HTMLImageElement;
                imgElement.src = "/Empty.jpg"; // Replace with your placeholder image URL
              }}
            />
            <div className="lg:w-3/4 flex flex-col text-center lg:text-left px-4">
              <span
                className="capitalize text-[#000] font-normal text-xl lg:text-2xl leading-normal"
                style={{ fontFamily: "Frank Ruhl Libre" }}
              >
                Shailen Mehta
              </span>
              <span
                className="capitalize text-[#000] font-normal text-xl lg:text-2xl leading-normal"
                style={{ fontFamily: "Frank Ruhl Libre" }}
              >
                Co-Founder & Director
              </span>
              <span
                className="capitalize text-[#363636] font-normal text-sm lg:text-xl leading-normal text-justify"
                style={{ fontFamily: "Frank Ruhl Libre" }}
              >
                Mr Shailen Mehta has a phenomenal experience when it comes to
                manufacturing and sourcing of rough diamonds.
              </span>
              <span
                className="capitalize text-white font-normal text-sm lg:text-xl leading-normal text-justify"
                style={{ fontFamily: "Frank Ruhl Libre" }}
              >
                For empty Space
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-16 flex flex-col justify-center items-center px-2">
        <span
          className="font-medium text-2xl md:text-4xl leading-tight text-black text-center"
          style={{ fontFamily: "Frank Ruhl Libre" }}
        >
          CO-PROMOTER
        </span>
        <div className="w-full mt-8 md:mt-12 flex flex-col items-center">
          <Image
            src="/hdeepak.png"
            alt="H.Dipak"
            height={444}
            width={444}
            className="border mb-4"
            onError={(e) => {
              const imgElement = e.target as HTMLImageElement;
              imgElement.src = "/Empty.jpg";
            }}
          />
          <div className="w-full md:w-[444px] flex flex-col text-center md:text-left px-4 md: px-0">
            <span
              className="capitalize text-[#000] font-normal text-xl md:text-2xl leading-normal"
              style={{ fontFamily: "Frank Ruhl Libre" }}
            >
              H.Dipak
            </span>
            <span
              className="capitalize text-[#363636] font-normal text-sm md:text-xl leading-normal text-justify"
              style={{ fontFamily: "Frank Ruhl Libre" }}
            >
              H. Dipak and company is the largest manufacturer and distributor
              of square-shaped diamonds in the world.
            </span>
          </div>
        </div>
      </div>
      <div className="flex mt-[104px] mb-[93px] w-full justify-center items-center">
        <Image
          src="/aboutus_dividers.png"
          alt="Divider"
          height={56}
          width={469}
        />
      </div>
      <div className="mx-8 flex flex-col justify-center items-center">
        <span
          className="capitalize text-[#000] font-medium text-2xl md:text-4xl lg:text-5xl  leading-normal items-center justify-center text-black text-center"
          style={{ fontFamily: "Frank Ruhl Libre" }}
        >
          MISSION TO EXCEL
        </span>
        {mission_excel.map((item) => (
          <span
            className={`${
              item.icon === "yes" ? "mt-4 md:mt-8" : ""
            }  text-[#000] text-lg md:text-[28px] not-italic font-normal leading-normal text-justify`}
            style={{ fontFamily: "Frank Ruhl Libre" }}
            key={item.icon}
          >
            {item.text}
          </span>
        ))}
      </div>

      <div className="flex mt-[104px] mb-[93px] w-full justify-center items-center">
        <Image
          src="/aboutus_dividers.png"
          alt="Divider"
          height={56}
          width={469}
        />
      </div>
      <div className="mx-8 flex flex-col justify-center items-center mt-[63px] mb-36">
        <span
          className="capitalize text-[#000] font-medium text-2xl md:text-4xl leading-normal text-center"
          style={{ fontFamily: "Frank Ruhl Libre" }}
        >
          Latest Highlights
        </span>

        <div className="flex mt-[46px] mb-[93px] w-full justify-center items-center">
          <Image
            src="/aboutus_highlights.png"
            alt="Divider"
            height={523}
            width={771}
          />
        </div>
      </div>
    </>
  );
};
export default AboutUsScreen;
