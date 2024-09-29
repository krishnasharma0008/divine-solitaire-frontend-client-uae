import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const DiamondEducationFourCPerfectDiamond: React.FC<Props> = () => {
  return (
    <div className="w-full bg-[#F3F4F8] border">
      <div className="m-auto bg-white shadow-md">
        {/* {activeSection === "cut" && ( */}
        <div className="md:p-4">
          <div className=" text-center px-2 mb-4 md:mb-8 text-gray-900 text-3xl font-Montserrat font-medium tracking-widest text-left">
            Choose Your Perfect Diamond
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center items-center px-2">
              {/* Content for the first column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-four-c-perfeft-diamond.jpg"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="flex justify-center items-center">
              <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                {/* <p className="mb-2.5">GIA : Gemological Institute of America</p>
                <p className="mb-2.5">
                  SGL : Solitaire Gemmological Laboratories
                </p> */}
                With so many unique options in precious stones, finding the
                perfect solitaire that matches your preferences can be a task.
                Even though each person’s diamond hunt is unique, here are a few
                points to help you understand how to go about it. It is always
                good to start by selecting the shape of the diamond. One can
                always go for the popular one such as the round cut or the
                princess cut, in case of confusion. Next, set the carat weight.
                This is important as the most beautiful half-carat diamond would
                be a disappointment if a one-carat diamond is what the person
                wishes for.
              </span>
            </div>
          </div>
          <div className="px-2">
            <div className="text-left mb-5 md:mb-5 text-gray-900 text-3xl font-Montserrat font-medium tracking-widest text-left">
              The 4 C&apos;s:
            </div>
            <div>
              <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                <p className="mb-1.5">Cut :</p>
                <p className="mb-2.5">
                  The cut of a diamond defines the diamond&apos;s fire and
                  brilliance, and plays an important role in the overall
                  appearance of a diamond. A poorly cut diamond will look dull
                  even with the excellent colour and clarity. An ideal cut is a
                  round shaped diamond or a princess cut diamond that is cut to
                  perfection and has excellent symmetry and excellent polish.
                  Diamonds at Divine Solitaires are of Ex.Ex.Ex Plus cut which
                  signifies that the solitaires possess excellent cut, excellent
                  symmetry and excellent polish.
                </p>
                <p className="mb-2.5">
                  If the selected cut is outside the set budget, one can
                  consider making slight changes to the carat weight. A change
                  of up to 10% is not visually detectable.
                </p>
              </span>
            </div>

            <div className="py-5">
              <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                <p className="mb-1.5">Clarity :</p>
                <p className="mb-2.5">
                  It is fine to make some concessions in the clarity of a
                  diamond. Each diamond has a few blemishes and inclusions
                  because of the condition in which they are formed. Many people
                  opt for diamonds with a few inclusions if they are invisible
                  to the naked eye. People who are intolerant to inclusions
                  despite them being invisible to the naked eye can go for Very
                  Slightly Included 2 (VSI2) stones. The most popular range is
                  the Very Slightly Included 1 (VSI1) diamonds to Very Slightly
                  included 2 diamonds which appears flawless, without the help
                  of a loupe.
                </p>
              </span>
            </div>

            <div className="py-5">
              <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                <p className="mb-1.5">Color :</p>
                <p className="mb-2.5">
                  It is difficult to detect colour in a diamond once it is set
                  in a ring or placed in a coloured environment. Diamond buyers
                  prefer diamonds that are colour graded with J, K, and L.
                  Diamonds with more facets reflect more light and tend to hide
                  colour better than other shapes. So, consider a round shaped
                  diamond, princess cut diamond or a modified brilliant cut
                  diamond over other shapes if you are concerned about colour.
                </p>
              </span>
            </div>

            <div className="py-5">
              <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                <p className="mb-1.5">Carat :</p>
                <p className="mb-2.5">
                  Carat refers to the weight of the diamond. One carat is
                  equivalent to 0.20 grams. The larger the carat, the pricier
                  the diamond, although the other &quot;C&apos;s&quot; can
                  influence the final price significantly.
                </p>
                <p className="mb-2.5">
                  Though not mentioned as one of the four C&apos;s, a
                  diamond&apos;s shape plays an integral part in the selection
                  of any diamond engagement ring.Divine Solitaires offers
                  diamonds in four shapes: round, princess cut, oval and pear.
                </p>
                <p className="mb-2.5">
                  Lastly it is critical that you have a comprehensive
                  understanding of diamond anatomy and proportion - brilliance,
                  dispersion and scintillation.
                </p>
                <p className="mb-2.5">
                  Understanding how to choose the perfect diamond, will affect
                  how you choose your engagement ring. Before choosing your
                  perfect engagement ring, make sure you have a comprehensive
                  understanding of diamonds- from their structure to the
                  4C&apos;s.
                </p>
                <p className="mb-2.5">
                  If following the above-mentioned step leaves one with a
                  diamond still above the set budget, the process should be
                  repeated with different thresholds.
                </p>
                <p className="mb-2.5">
                  Reduce the quality furthermore. Go for a grade as low as
                  Slightly Included 1 diamonds.
                </p>
                <p className="mb-2.5">
                  One can go for the colour next. The grade can go down to J. If
                  the diamond is expected to set up in gold, one can safely drop
                  to grade K.
                </p>
                <p className="mb-2.5">
                  Finally, reduce the cut. Go for the round cut instead of the
                  fancy ones.
                </p>
                <p className="mb-2.5">
                  After all these concessions, if the diamonds are still outside
                  the set budget, the further concessions depend on individual
                  preferences.
                </p>
                <p className="mb-2.5">
                  If the desired carat weight is one, one can consider dropping
                  the clarity to Slightly Included 2 diamonds.
                </p>
                <p className="mb-2.5">
                  An L-M is a perfect colour range to go for if the chosen
                  diamond is a brilliant cut diamond under 1.50 carats and is to
                  be set in yellow gold.
                </p>
                <p className="mb-2.5">
                  If the size of the diamond is the primary concern for
                  choosing, one can go for a fair round cut or fancy shaped
                  diamonds.
                </p>
                <p className="mb-2.5">
                  If the diamond is still out of budget one should consider
                  increasing the budget or reducing the set minimum carat
                  weight.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondEducationFourCPerfectDiamond;
export { type Props as DiamondEducationFourCPerfectDiamondProps };
