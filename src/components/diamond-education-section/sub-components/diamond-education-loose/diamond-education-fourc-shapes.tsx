import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const DiamondEducationFourCShapes: React.FC<Props> = () => {
  return (
    <div className="w-full text-center bg-[#F3F4F8] border">
      <div className="m-auto bg-white shadow-md">
        {/* {activeSection === "cut" && ( */}
        <div className="md:p-4">
          <div className="px-2 mb-4 md:mb-8 text-gray-900 text-3xl font-Montserrat font-medium tracking-widest">
            Diamond Shapes
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              {/* Content for the first column */}
              {/* Replace this with your desired content */}
              <Image
                alt="Diamond Cut"
                src="/diamond-education-four-c-shapes.jpg"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="px-2">
              {/* Content for the second column */}
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                A diamond’s shape refers to its physical form. It is clearly not
                a part of the 4Cs but is one of the most important factors when
                choosing a diamond. The distinction between the diamond cut and
                the diamond shape might be confusing at first. The shape of the
                diamond is its physical appearance but its cut refers to its
                ability to reflect light, its facets, and angles. The most
                common shapes of diamond include asscher, brilliant, cushion
                cut, emerald cut, heart, marquise, oval, pear, princess cut, and
                radiant cut.
              </p>
            </div>
          </div>
        </div>

        <div className="md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center items-center px-2">
              {/* Content for the first column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-four-c-shapes-brilliant-cut.jpg"
                width="205"
                height="120"
                sizes="100vw"
                className="w-[205px] h-[120px] border p-2.5"
              />
            </div>
            <div className="flex justify-center items-center">
              {/* Content for the second column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-four-c-shapes-oval-cut.jpg"
                width="205"
                height="120"
                sizes="100vw"
                className="w-[205px] h-[120px] border p-2.5"
              />
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Brilliant Cut
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Oval Cut
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                A brilliant cut diamond is a round cut diamond and is by far the
                most popular diamond shape. It is superior to other shapes in
                terms of proper reflection of light, maximising the brightness
                potential, etc. due to its cone shape.
              </p>
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                The oval cut is a modified version of the round-cut diamond and
                is made for those who want the brilliance of the round-shaped
                diamond in an unusual shape. Oval cut diamonds create an
                illusion of length and elongation.
              </p>
            </div>
          </div>
        </div>

        <div className="md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center items-center px-2">
              {/* Content for the first column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-four-c-shapes-princess-cut.jpg"
                width="205"
                height="120"
                sizes="100vw"
                className="w-[205px] h-[120px] border p-2.5"
              />
            </div>
            <div className="flex justify-center items-center">
              {/* Content for the second column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-four-c-shapes-pear-cut.jpg"
                width="205"
                height="120"
                sizes="100vw"
                className="w-[205px] h-[120px] border p-2.5"
              />
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Princess cut
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Pear Diamonds
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                The princess cut is the fanciest and the most popular diamond
                shape amongst all others. Like round shape diamonds, princess
                cut diamonds are compatible with any style of rings. The
                princess cut diamonds are exquisitely shaped in order to get top
                brilliance.
              </p>
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                A pear-shaped diamond is a combination of the round and marquise
                cut diamond with a tapered point at one end. A pear-shaped
                diamond should be perfect in terms of symmetry. The point of the
                tapered end should match with the apex of the rounded end. The
                diamond contains 58 facets, allowing light to pass through it in
                the same way as the round shaped diamond.
              </p>
            </div>
          </div>
        </div>

        <div className="md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center items-center px-2">
              {/* Content for the first column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-four-c-shapes-emerald-cut.jpg"
                width="205"
                height="120"
                sizes="100vw"
                className="w-[205px] h-[120px] border p-2.5"
              />
            </div>
            <div className="flex justify-center items-center">
              {/* Content for the second column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-four-c-shapes-asscher-cut.jpg"
                width="205"
                height="120"
                sizes="100vw"
                className="w-[205px] h-[120px] border p-2.5"
              />
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Emerald Cut
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              The Asscher Cut
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                This is a popular style known for its precision and beauty. The
                emerald cut is named so because it is cut in a shape that was
                originally a style for emeralds. It might not possess the
                brilliance of the diamonds cut in a kite or triangular shape but
                its pure ice-like clarity makes up for the brilliance. This
                style of cut is also called the step-cut.
              </p>
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                The asscher cut is also called the “Square Emerald-Cut”. It has
                cropped corners because of which it appears to be octagonal at
                first glance. Asscher cut diamonds are bright, shiny and clear
                in appearance but allow the inclusions to be visible to the
                naked eye, if there are any.
              </p>
            </div>
          </div>
        </div>

        <div className="md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center items-center px-2">
              {/* Content for the first column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-four-c-shapes-cushion-cut.jpg"
                width="205"
                height="120"
                sizes="100vw"
                className="w-[205px] h-[120px] border p-2.5"
              />
            </div>
            <div className="flex justify-center items-center">
              {/* Content for the second column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-four-c-shapes-heart-cut.jpg"
                width="205"
                height="120"
                sizes="100vw"
                className="w-[205px] h-[120px] border p-2.5"
              />
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Cushion Cut
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Heart diamonds
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                The cushion cut is a combination of two shapes, square and the
                round cut. It is called a cushion cut because of its rounded
                corners and its resemblance to a pillow. It gives the diamond an
                antique look and a romantic appeal. The cushion cut diamond
                contains 58 facets.
              </p>
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                It is a modified version of a brilliant cut diamond only with a
                cleft at the top. A heart-shaped diamond is unique and a symbol
                of love, popular in forms of solitaire pendants and diamond
                rings. Symmetry is an essential factor while selecting a
                heart-shaped diamond. The division between the two lobes should
                be evident. If you want a bigger stone, avoid going for
                heart-shaped diamonds that weigh less than 0.50 carat as they
                appear small and even smaller when set in prongs.
              </p>
            </div>
          </div>
        </div>

        <div className="md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center items-center px-2">
              {/* Content for the first column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-four-c-shapes-marquise-cut.jpg"
                width="205"
                height="120"
                sizes="100vw"
                className="w-[205px] h-[120px] border p-2.5"
              />
            </div>
            <div className="flex justify-center items-center">
              {/* Content for the second column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-four-c-shapes-radiant-cut.jpg"
                width="205"
                height="120"
                sizes="100vw"
                className="w-[205px] h-[120px] border p-2.5"
              />
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Marquise Shape
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Radiant Cut
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                It is a modified brilliant cut diamond, long and narrow in shape
                considered ideal for engagement rings. Its long and narrow
                boat-like shape creates an illusion of it being greater in size.
                Marquise-shaped diamonds have one of the largest surface areas,
                which is a great option when one wants to magnify the appearance
                of a diamond.
              </p>
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                A radiant-cut diamond is square shaped but still has a complete
                brilliant cut facet pattern on its crown and pavilion.It
                combines the round cut and the emerald cut to create an
                uconventional and brilliant diamond shape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondEducationFourCShapes;
export { type Props as DiamondEducationFourCShapesProps };
