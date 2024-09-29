import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const DiamondEducationFourC: React.FC<Props> = () => {
  return (
    <div className="w-full text-center bg-[#F3F4F8] border">
      <div className="m-auto bg-white shadow-md">
        {/* {activeSection === "cut" && ( */}
        <div className="md:p-4">
          <div className="px-2 mb-4 md:mb-8 text-gray-900 text-3xl font-Montserrat font-medium tracking-widest">
            Diamond Cut
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              {/* Content for the first column */}
              {/* Replace this with your desired content */}
              <Image
                alt="Diamond Cut"
                src="/diamond-education-four-c-diamond-cut.jpg"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="px-2">
              {/* Content for the second column */}
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                A beauty of a well-cut diamond lies not only in its shape but
                also in the effectiveness of the stone to reflect the light that
                touches it. A poorly-cut diamond appears lifeless whereas a
                well-cut one has a brilliant, fiery, and scintillating
                appearance. Diamond cuts determine the quality of a diamond to a
                great extent. An perfectly cut diamond has ideal proportions,
                angles, excellent polish and symmetry, and appears larger than
                other diamonds of the same carat weight. Its ideal proportions
                make sure that it refracts light to produce the required fire
                and brilliance. The perfect symmetry can be acquired only with
                immense expertise in diamond cutting, which is what Divine
                Solitaires ensures! All the diamonds from Divine Solitaires are
                Ex.Ex.Ex. Plus cut diamonds which refers to excellent cut,
                excellent polish and excellent symmetry.
              </p>
            </div>
          </div>
        </div>

        <div className="md:p-4">
          <div className="px-2 mb-4 md:mb-8 text-gray-900 text-3xl font-Montserrat font-medium tracking-widest">
            Diamond Color
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="px-2">
              {/* Content for the second column */}
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                Diamonds can be colourless or may have a slight yellow tint.
                However, the diamonds with the least amount of colour are
                preferred while shopping for diamonds. A diamond colour is
                graded on a scale of D to Z, however Divine Solitaires provides
                diamonds that are graded on a diamond color grade D to K and are
                divided into five broad categories- colourless, nearly
                colourless, faint, very light, and light. Diamonds that lie
                between D-F on the colour scale display no colour and are the
                clearest diamonds. D to F are the rarest and the most valuable
                diamonds than the others on the scale. Diamonds lying between
                the range G to H appear nearly colourless when observed from the
                face-up position but display a little amount of colour when
                observed from the face-down position against a perfectly white
                background. Diamonds under K display a faint yellow color when
                viewed from the face-up position. They are a great option for
                those who do not mind the color.
              </p>
            </div>
            <div className="">
              {/* Content for the first column */}
              {/* Replace this with your desired content */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-four-c-diamond-color.jpg"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="md:p-4">
          <div className="px-2 mb-4 md:mb-8 text-gray-900 text-3xl font-Montserrat font-medium tracking-widest">
            Diamond Clarity
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              {/* Content for the first column */}
              {/* Replace this with your desired content */}
              <Image
                alt="Diamond Clarity"
                src="/diamond-education-four-c-diamond-clarity.jpg"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="px-2">
              {/* Content for the second column */}
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                Since diamonds are formed inside the earth under extreme
                pressure and heat, they have small imperfections (called
                ‘birthmarks’), which doesn’t come as a surprise. Every diamond
                comes with inclusions (imperfections on the inside) and
                blemishes (imperfections on the surface). The degree to which
                these imperfections are present on or inside the diamond refers
                to diamond clarity and ranges from FL (Flawless) to I
                (Included). Diamonds that are devoid of such flaws are
                considered to be of high quality. Divine Solitaires diamonds are
                superior-quality stones on the range of IF (Internally Flawless)
                to SI2 (Slightly Included 2).
              </p>
            </div>
          </div>
        </div>

        <div className="md:p-4">
          <div className="px-2 mb-4 md:mb-8 text-gray-900 text-3xl font-Montserrat font-medium tracking-widest">
            Diamond Carat
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="px-2">
              {/* Content for the second column */}
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                Carat is a term that refers to the weight of a diamond. The word
                carat originates from the word ‘carob seeds’, a term that was
                used to measure the weight of the diamonds prior to the
                twentieth century. A carat is equal to 0.2 grams which is just
                about the weight of a single paper clip. A carat is completely
                unrelated to the word ‘Karat’ which sounds quite similar to it
                and refers to the purity of gold. For example, a one-carat
                diamond measures approximately 6.5 mm in width, a diamond that
                weighs twice as it measures only 8.2 mm wide. Since a diamond
                that is big in size is rare, it is expected to be expensive. A
                single two-carat diamond is more expensive than two one-carat
                diamonds together. This implies that the cost of a diamond
                increases with its size. So as the carat weight increases, you
                typically pay more not only in total but also on a pay-per-carat
                basis. When you buy diamonds you should choose the carat weight
                not just on the basis of the size but also the cut grade, as it
                majorly affects the diamond quality.
                <br />
                <br />
                The cost and quality of diamonds depend on these 4Cs. One should
                consider all these factors before judging the right value of any
                diamond.
              </p>
            </div>
            <div className="">
              {/* Content for the first column */}
              {/* Replace this with your desired content */}
              <Image
                alt="Diamond Carat"
                src="/diamond-education-four-c-diamond-carat.jpg"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondEducationFourC;
export { type Props as DiamondEducationFourCProps };
