import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const DiamondEducationRingSettingTypes: React.FC<Props> = () => {
  return (
    <div className="w-full bg-[#F3F4F8] border">
      <div className="m-auto bg-white shadow-md">
        {/* {activeSection === "cut" && ( */}
        <div className="md:p-4">
          <div className=" text-center px-2 mb-4 md:mb-8 text-gray-900 text-3xl font-Montserrat font-medium tracking-widest text-left">
            Diamond Setting Type
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center items-center px-2">
              {/* Content for the first column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-ring-setting-type.jpg"
                width="346"
                height="148"
                sizes="100vw"
                className="w-[346px] h-[148px]"
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                From the cut of the diamond to its setting, it is extremely
                important that the ring you choose does not just suit the person
                but is also a reflection of their personality. Some like the
                extra sparkle, some fall for the simple elegance and some choose
                their diamonds for the perfect cut and ring settings. The ring
                settings also differ in accordance with the ring type and affect
                your solitaire ring budget. Here are a few common types of ring
                settings:
              </p>
            </div>
          </div>
          <div className="px-2">
            <div>
              <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                <p className="mb-1.5">Prongs :</p>
                <p className="mb-2.5 text-justify">
                  Prongs are the most traditional and classic type of engagement
                  ring setting. This type of setting allows maximum visibility
                  of the diamond and minimum metal is visible which increases
                  the brilliance of the diamond as more light is able to pass
                  through it.
                </p>
              </span>
            </div>

            <div className="pt-5">
              <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                <p className="mb-1.5">Bezel :</p>
                <p className="mb-2.5 text-justify">
                  From promise rings to engagement rings with names inscribed,
                  this setting is generally used to provide extra durability to
                  the ring. This simple and sober setting completely surrounds
                  the diamond and keeps it intact. White gold or platinum can be
                  used to give the diamond more prominence. This type of setting
                  is a versatile one as it can accommodate all sizes of a
                  diamond.
                </p>
              </span>
            </div>

            <div className="pt-5">
              <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                <p className="mb-1.5">Tension :</p>
                <p className="mb-2.5 text-justify">
                  This is a type of setting that is currently in vogue when it
                  comes to engagement rings. The use of actual when it comes to
                  engagement rings. The use of actual prongs is eliminated by
                  suspending the diamond between the two ends of the bands since
                  the prong-like setting which holds the diamond is very strong.
                </p>
              </span>
            </div>

            <div className="pt-5">
              <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                <p className="mb-1.5">Channel :</p>
                <p className="mb-2.5 text-justify">
                  A ‘channel’ is created in this ring setting by using two metal
                  bands and in this channel small diamonds are embedded. The
                  diamonds are secure because they are embedded between the
                  metal. This ring setting type makes it easy for people who do
                  intensive work with their hands.
                </p>
              </span>
            </div>

            <div className="pt-5">
              <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                <p className="mb-1.5">Twist :</p>
                <p className="mb-2.5 text-justify">
                  A complex type of setting which is currently trending in
                  engagement ring for couples is the twist setting in which the
                  metal band is twisted to create a crisscross effect and the
                  diamond is mounted on top of it.
                </p>
              </span>
            </div>

            <div className="py-5">
              <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                <p className="mb-1.5">Bar :</p>
                <p className="mb-2.5 text-justify">
                  A very classy and bold kind of setting, the bar setting is the
                  type in which two metal bars hold the diamond in between. This
                  helps showcase the diamond beautifully and focuses on the
                  magnificence of the diamond.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondEducationRingSettingTypes;
export { type Props as DiamondEducationRingSettingTypesProps };
