import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const DiamondEducationFourCAnatomy: React.FC<Props> = () => {
  return (
    <div className="w-full bg-[#F3F4F8] border">
      <div className="m-auto bg-white shadow-md">
        {/* {activeSection === "cut" && ( */}
        <div className="md:p-4 text-center">
          <div className="px-2 mb-4 md:mb-8 text-gray-900 text-3xl font-Montserrat font-medium tracking-widest text-left">
            Diamond Anatomy
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              {/* Content for the first column */}
              {/* Replace this with your desired content */}
              <Image
                alt="Diamond Cut"
                src="/diamond-education-four-c-anatomy.jpg"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="px-2">
              {/* Content for the second column */}
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                All the diamonds are unique in their own way but share the same
                basic structure. The structural features of a diamond determine
                its brilliance, proportions, and scintillation. Each part of its
                basic structure has a particular name. Understanding how these
                parts contribute to the diamond as a whole help one to choose
                the perfect stone. The basic structure of a diamond consists of
                eight main parts namely table, diameter, crown, girdle,
                pavilion, depth, crown, and culet. Here’s a brief description of
                each part.
              </p>
            </div>
          </div>
        </div>

        <div className="md:p-4 px-2">
          <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
            <p className="mb-1.5 text-justify">
              Diameter: If the width of the polished stone is measured from
              end-to-end, the diameter of the diamond is obtained.
            </p>
            <p className="mb-1.5 text-justify">
              Table: The table is the largest polished surface on the top of the
              diamond.
            </p>
            <p className="mb-1.5 text-justify">
              Crown: It is the top part of a diamond that extends from the table
              to the girdle.
            </p>
            <p className="mb-1.5 text-justify">
              Girdle: Girdle is the part of the diamond where the crown and
              pavilion of the diamond meet.
            </p>
            <p className="mb-1.5 text-justify">
              Culet: Culet is the small and pointed facet at the bottom of the
              diamond.
            </p>
            <p className="mb-4 text-justify">
              Pavilion: The bottom part of the diamond that extends from the
              girdle to the culet.
            </p>
            <p className="mb-2.5 text-justify">
              It is important to understand the anatomy of solitaire diamonds
              before choosing the right one to appreciate the intricacies of the
              diamond.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DiamondEducationFourCAnatomy;
export { type Props as DiamondEducationFourCAnatomyProps };
