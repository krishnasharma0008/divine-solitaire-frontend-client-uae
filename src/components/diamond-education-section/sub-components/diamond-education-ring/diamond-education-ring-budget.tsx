import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const DiamondEducationRingBudget: React.FC<Props> = () => {
  return (
    <div className="w-full bg-[#F3F4F8]">
      <div className="m-auto bg-white shadow-md">
        <div className="md:p-4">
          <div className=" text-center px-2 mb-4 md:mb-8 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest text-left">
            Buy an Engagement Ring on a Budget
          </div>
          <div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 pr-2">
                <Image
                  alt="Diamond Color"
                  src="/diamond-education-ring-budget-engagment-ring.jpg"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full md:w-2/3">
                <span className="w-full font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                  <p className="mb-2.5 text-justify">
                    Every person desires to get the most beautiful diamond rings
                    for their better half. However, no one desires this at the
                    cost of their entire savings which makes the process of
                    buying diamond engagement rings quite difficult. Buying
                    solitaire rings can get pretty cumbersome when other factors
                    affecting the solitaire ring budget come into the picture.
                    It is therefore essential to know everything about diamonds
                    so that you can precisely make your choices which will help
                    you keep the cost your diamond ring price minimal and
                    affordable. Divine Solitaires provides you with an exquisite
                    range of diamond rings to choose from and helps you stick to
                    your engagement ring budget. Here are a few factors to
                    consider while buying your diamond ring to make it
                    cost-effective:
                  </p>
                  <p className="mb-2.5 text-justify">
                    Cuts and Shapes :
                    <br />
                    The shape of a diamond refers to the entire geometric
                    proportion of the solitaire whereas cuts are a diamond’s
                    proportions and facets. The cut determines the brilliance
                    and sparkle of solitaire rings. It is the most important
                    factor that helps in deciding the diamond ring price. Not
                    just cost, but it also helps in determining the quality of
                    the stone. Hearts and arrows, round cut, and princess cuts
                    are some of the common choices of cuts. The shape of a
                    diamond is completely a personal choice. Once you have
                    decided the shape and the cut of your solitaire as
                    preferred, the other 3 Cs which are clarity, colour and
                    carat weight become easy to determine. You are also less
                    inclined to change your diamond engagement rings or wedding
                    rings anytime soon as you have chosen the cut and shape
                    yourself and hence, it helps you save cost and stay within
                    your diamond ring budget.
                  </p>
                </span>
              </div>
            </div>
            <div className="px-2 py-6">
              <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                <p className="mb-3 text-justify">
                  Clean to the naked eye? Good to buy! :
                  <br />A strict budget calls for stringent action! Sometimes a
                  high-quality diamond with VVS1 clarity cannot be
                  differentiated from a diamond with inclusions like SI1 to the
                  naked eye. However, there is a considerable amount of
                  difference in the diamond ring price which effectively screams
                  about the difference in quality. Until viewed under 10x
                  magnification, the inclusions present in SI1 diamonds are as
                  good as not being present. So if you are on a tight engagement
                  ring budget and do not want to spend more on your diamond
                  rings you may opt for an SI1 diamond and not a VVS1 as to the
                  naked eye, since both are almost similar. The same applies to
                  the colour grading of diamonds. The GIA has set up a colour
                  grading scheme ranging from D-Z in which ‘D’ includes the
                  clearest diamonds and ‘Z’ resembles diamonds with a slight
                  yellow colour. However, if you are on a strict budget, you
                  need not buy a ‘D’ graded diamond. A diamond with ‘I’ grading
                  should also suffice as diamond engagement rings under both
                  grades appear the same to the naked eye.
                </p>
                <p className="mb-3 text-justify">
                  Polish Matters :
                  <br />
                  Polishing the solitaire helps in smoothing the surface of th
                  diamond rings. You can save on your diamond ring price by
                  getting a ‘good’ grade of polishing and not striving for an
                  ‘excellent’ grade as there is not much of a difference between
                  both. Most consumers cannot even distinguish the difference in
                  the quality of polishing.
                </p>
                <p className="mb-3 text-justify">
                  Alternative to Platinum :
                  <br />
                  Platinum is the most expensive metal owing it to its shine and
                  durability. It is also the most preferred metal for diamond
                  engagement rings as it complements the diamond by increasing
                  its sparkle and brilliance. However, sometimes it is not
                  possible to afford platinum as the metal for you wedding ring
                  or engagement ring, in case of a low wedding ring budget In
                  such cases, an alternative such as white gold can be used.
                  White gold is almost similar in appearance to platinum and is
                  an excellent substitute for platinum diamond rings. Advantages
                  of white gold include durability, scratch resistance that
                  enhance the diamond’s brilliance.
                </p>
                <p className="mb-3 text-justify">
                  Certified Diamonds :
                  <br />
                  Diamond certification is important to ensure that the
                  solitaire rings that you are purchasing are of premium
                  quality. No matter how strict your budget is, it is necessary
                  to get a quality-checked product to ensure it lasts and is
                  worth its cost. Divine Solitaires provides you with quality
                  assurance certificates which ensure that the diamond for you
                  engagement rings or single diamond rin is responsibly sourced,
                  quality assured and conflict free. Each diamond engagement
                  ring by Divine Solitaires are also checked on 123 parameters
                  and then given a quality check certification by Divine
                  Solitaires which is far better than GIA, IGI or any other
                  international lab certificate to ensure that consumers get the
                  best diamonds for their rings.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondEducationRingBudget;
export { type Props as DiamondEducationRingBudgetProps };
