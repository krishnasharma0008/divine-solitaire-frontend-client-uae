import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const DiamondEducationFourCConflictFree: React.FC<Props> = () => {
  return (
    <div className="w-full bg-[#F3F4F8] border">
      <div className="m-auto bg-white shadow-md">
        <div className="md:p-4">
          <div className="mb-4 md:mb-8">
            <Image
              alt="Diamond Cut"
              src="/diamond-education-four-c-conflict-free.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
          <div className="px-2">
            <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
              <p className="mb-2.5 text-justify">
                Diamonds that are sold to finance a war and create conflict
                against the legitimate governments are called blood or conflict
                diamonds. These conflicts also include inhumane practices such
                as torture and slavery to extract diamonds. Conflict-free
                diamonds, however, are those that are in no way related to the
                terror and malpractices by the opposite groups. These diamonds
                are ethically sourced and mined.
              </p>
              <p className="mb-2.5 text-justify">
                In response to this malpractice, the diamond industry along with
                the United Nations created the World Diamond Council which
                created the Kimberley process for the ethical sourcing of
                diamonds. It brought to attention the destructive effects of
                unethical sourcing of diamonds worldwide.
              </p>
              <p className="mb-2.5 text-justify">
                The Kimberley Process Certification Scheme (KPCS) was
                established in 2003 to prevent conflict diamonds from entering
                the diamond market. The Kimberley Process made it possible for
                the conflict-free solitaire diamonds to make up the majority of
                the diamond market and to be available to various designers for
                use.
              </p>
              <p className="mb-2.5 text-justify">
                Divine Solitaires along with the global diamond industry is
                intolerant towards conflict diamonds. In keeping with the
                Kimberley process which tracks diamonds from the mine to the
                market, Divine Solitaires purchases diamonds from the largest
                and the most respected suppliers. The business is strictly
                limited to those who adhere and enforce the standards
                established by the Kimberley process. All the Divine Solitaires
                diamonds are warranted to be conflict-free.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondEducationFourCConflictFree;
export { type Props as DiamondEducationFourCConflictFreeProps };
