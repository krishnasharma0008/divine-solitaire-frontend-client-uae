import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const DiamondEducationRingTypes: React.FC<Props> = () => {
  return (
    <div className="w-full text-center bg-[#F3F4F8] border">
      <div className="m-auto bg-white shadow-md">
        <div className="md:p-4">
          <div className="px-2 mb-4 md:mb-8 text-gray-900 text-3xl font-Montserrat font-medium tracking-widest">
            Diamond Ring Type
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
              &quot;A diamond is forever.&quot; The hardest rock on earth and
              undoubtedly the most beautiful stones too, it is not just another
              piece of jewellery to be worn at occasions. Diamonds are precious
              stones that add elegance to your persona with utter grace.
              Personifying sheer magnificence and adding charm to your
              personality, diamonds leave everyone awestruck. The hardest rock
              symbolizes the everlasting bond as the gem lasts almost forever.
              Divine Solitaires offers a varied range, right from engagement
              rings to wedding rings to choose from that are made just for you
              and fit your diamond ring budget as well.
            </p>
          </div>
        </div>

        <div className="md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex justify-center items-center">
              {/* Content for the second column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-ring-type-solitaire-engagement.png"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto border"
              />
            </div>
            <div className="flex justify-center items-center">
              {/* Content for the second column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-ring-type-pave-engagement.png"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto border"
              />
            </div>
            <div className="flex justify-center items-center">
              {/* Content for the second column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-ring-type-channel-set.png"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto border"
              />
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Solitaire Engagement Rings
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Pavé Engagement Rings
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Channel Set Engagement Rings
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                The most traditional type of engagement ring, this couple band
                is for those who like to keep it simple and elegant. Solitaire
                engagement rings consist of a single diamond mounted on the top
                of the ring. The solitaire ring is shaped in such a way so that
                the centre stone receives the entire attention. This timeless
                classic is generally made with narrower bands to make the
                diamond look large. Other variations include having thicker
                bands or ring guards which frame the centrepiece to make it look
                more prominent and distinguished.
              </p>
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                Pavé engagement rings are more of diamonds and reveal less
                metal. These types of engagement rings are encrusted with tiny
                diamonds along the metal band such that it seems as if the
                entire ring is made of diamonds. The metal part is mostly not
                visible as the diamonds use just beads or prongs to hold them in
                place. The centre stone of this fashion ring is generally round
                cut or princess cut.
              </p>
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                No prongs are used in channel set engagement rings. The diamonds
                are embedded into channel-like grooves between two strips of
                metal. Available in a variety of cuts and shapes, these embedded
                diamonds on the side help give the centre stone a much more
                bolder look.
              </p>
            </div>
          </div>
        </div>

        <div className="md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex justify-center items-center px-2">
              {/* Content for the first column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-ring-type-side-stone-engagement.png"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto border"
              />
            </div>
            <div className="flex justify-center items-center">
              {/* Content for the second column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-ring-type-three-stone-engagement.png"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto border"
              />
            </div>
            <div className="flex justify-center items-center">
              {/* Content for the second column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-ring-type-tension-set-engagement.png"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto border"
              />
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Sidestone Engagement Rings
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Three Stone Engagement Rings
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Tension Set Engagement Rings
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                Just like you perfectly complement your partner, the sidestone
                also perfectly complements the diamond in the centre. Sidestone
                solitaire rings are generally flanked by two or more smaller
                diamonds on either side of the central gem. The sidestones help
                in adding more brilliance, make the ring more radiant and also
                add some extra cost to your engagement ring budget.
              </p>
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                The Three Stone Engagement or Wedding Rings is for those who
                like some extra bling on their hands. The centre gem is flanked
                by two other diamonds on each side in this type of engagement
                ring. The centre stone is elevated a bit higher than the other
                two diamonds to attract more attention. A higher quality center
                stone affects the couple band budget. Round cut or princess cut
                diamonds are preferred for the centre diamond and are also
                available in couple bands
              </p>
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                It is a modern and unique type of ring setting without any
                prongs in which the centre diamond is held in place by physical
                force of the setting in such a way that the diamond appears to
                be suspended or floating in the air. Just as the name suggests,
                it uses force and tension of the ring to keep the diamond in
                place. Popular choices of diamond cuts for these types of rings
                are round, princess and emerald cut.
              </p>
            </div>
          </div>
        </div>

        <div className="md:p-4">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex justify-center items-center px-2">
              <Image
                alt="Diamond Color"
                src="/diamond-education-ring-type-halo-engagement.png"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto border"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                alt="Diamond Color"
                src="/diamond-education-ring-type-vintage-engagement.png"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto border"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                alt="Diamond Color"
                src="/diamond-education-ring-type-wedding-set-engagement.png"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto border"
              />
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Halo Engagement Rings
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Vintage Engagement Rings
            </div>
            <div className="px-2 mt-3 md:mb-3 md:mt-5 text-gray-900 text-2xl font-Montserrat font-medium tracking-widest">
              Wedding Sets
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                Halo engagement rings are a type of pavé engagement rings as
                they involve a similar craft. This setting features a micro-pavé
                setting in a halo formation around the central gemstone. The
                ring’s sparkle is enhanced by the smaller diamonds around which
                give it a radiant and bright look. Asscher-cut diamonds,
                pear-shaped and oval diamonds are popular choices.
              </p>
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                There is nothing that can ever beat a classic. Vintage rings are
                an epitome of elegant artisanship and are the most desired form
                of engagement rings. These designs draw inspiration from classic
                timeless pieces of jewellery and boast of maximum fire,
                brilliance, and scintillation. In vintage rings, the centre
                stones are usually prong-set, basket-set or bezel-set.
              </p>
            </div>
            <div className="px-2">
              <p className="font-Montserrat text-justify not-italic font-normal text-base text-gray-900">
                Wedding sets usually include a matching set of engagement rings
                and wedding rings. The rings of the bride and groom are also
                coordinated to ensure a perfect and complimenting combination of
                the rings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondEducationRingTypes;
export { type Props as DiamondEducationRingTypesProps };
