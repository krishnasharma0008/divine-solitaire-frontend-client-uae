import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const DiamondEducationChoosePerfectDiamond: React.FC<Props> = () => {
  return (
    <div className="w-full bg-[#F3F4F8] border">
      <div className="m-auto bg-white shadow-md">
        <div className="md:p-4">
          <div className="px-2 mb-4 md:mb-8 text-center text-gray-900 text-3xl font-Montserrat font-medium tracking-widest">
            Choose Your Perfect Diamond Jewellery
          </div>
          <div className="mb-5">
            <Image
              alt="Diamond Cut"
              src="/diamond-education-ring-type.jpg"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
          <div className="px-2">
            <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
              Purchasing diamond jewellery is always a special and memorable
              event. It is important that the chosen piece is perfectly selected
              and carefully decided upon. Thus, Divine Solitaires is committed
              to providing its customers with all the necessary advice and
              education on diamonds, enabling them to effectively choose diamond
              jewellery from a diverse solitaire diamond collection which
              includes diamond studs, diamond pendants, diamond bangles, diamond
              necklaces, diamond bracelets, diamond earrings and diamond
              tanmaniya. So let&apos;s take a look at some of our most popular
              diamond jewellery and how to select solitaire diamond jewellery:
            </p>
          </div>
        </div>

        <div className="md:pt-4 px-2">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex items-center px-2">
              <Image
                alt="Diamond Color"
                src="/diamond-education-choose-perfect-diamond-earing.png"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-2/3 flex items-center">
              <span className="w-full font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                <p className="pb-10 text-center items-center">DIAMOND STUDS</p>
                <p className="mb-2.5 text-justify">
                  Diamond earrings are one of the best gifts to give to someone
                  special or to treat yourself to. They come in a variety of
                  designs and one of the first things to consider while buying
                  diamond stud earrings is the shape of your face. Princess cut
                  diamonds go perfectly with broad faces while round cut
                  diamonds are best suited for women with narrow faces. Also
                  consider your skin tone when choosing the metal to mount the
                  diamond on. White metals like white gold and platinum
                  complement a lighter skin tone while yellow gold suits the a
                  dusky skin tone.
                </p>
              </span>
            </div>
          </div>
        </div>

        <div className="md:pt-4 px-2">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 flex items-center">
              <span className="w-full font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                <p className="pb-10 text-center items-center">
                  DIAMOND PENDANTS
                </p>
                <p className="mb-2.5 text-justify">
                  Diamond pendants are subtle yet always make a sparkling
                  statement. Diamond pendants are subtle yet always make a
                  sparkling statement. These are perfect for both formal and
                  social settings. The first thing to consider while choosing a
                  diamond pendant is the size of the necklace. Always first try
                  out necklaces of different sizes to see what length suits you.
                  The style of the pendant is another important thing to note;
                  you can choose a design that is subtle and classic or a
                  modernistic style that has a more striking and bold pattern.
                  It is possible that both kinds of designs might complement
                  your personality! The metal on which the stone will be mounted
                  needs to be chosen properly – coloured diamonds suit yellow
                  and rose gold better while colourless diamonds look pristine
                  on white metals like white gold. Pair a diamond pendant with a
                  solitaire ring and glam up your look!
                </p>
              </span>
            </div>
            <div className="w-full md:w-1/3 flex items-center px-2">
              <Image
                alt="Diamond Color"
                src="/customer-stories-pendent.jpg"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="md:pt-4 px-2">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex items-center px-2">
              <Image
                alt="Diamond Color"
                src="/diamond-education-choose-perfect-diamond-bangle.png"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-2/3 flex items-center">
              <span className="w-full font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                <p className="pb-10 text-center items-center">
                  DIAMOND BANGLES
                </p>
                <p className="mb-2.5 text-justify">
                  Diamond bangles make a shimmering statement and come in an
                  incredible variety. The first thing to consider when you go to
                  choose diamond bangles is their size. Bangles should fit you
                  such that they can move along your wrists and not cut into
                  your skin. However, a very loose bangle will be uncomfortable
                  since it’ll keep slipping off your wrist. Next, it is
                  essential to select the number of diamonds on your solitaire
                  diamond bangle. Some bangles are studded with diamonds and
                  shimmer brightly while others have only a few diamonds and
                  create a very subtle look. If you want more diamonds on your
                  bangle, it is best to select smaller ones. Buying diamond
                  jewellery is a special moment. Divine Solitaires provides a
                  varied range of jewellery including diamond tanmaniya, diamond
                  necklaces and diamond bracelets and also provides all the
                  education and information to ensure that your selected
                  solitaire jewellery makes the right impression.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondEducationChoosePerfectDiamond;
export { type Props as DiamondEducationChoosePerfectDiamondProps };
