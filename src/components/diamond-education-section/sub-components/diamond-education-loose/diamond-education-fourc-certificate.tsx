import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const DiamondEducationFourCCertificate: React.FC<Props> = () => {
  return (
    <div className="w-full bg-[#F3F4F8] border">
      <div className="m-auto bg-white shadow-md">
        {/* {activeSection === "cut" && ( */}
        <div className="md:p-4">
          <div className=" text-center px-2 mb-4 md:mb-8 text-gray-900 text-3xl font-Montserrat font-medium tracking-widest text-left">
            Diamond Certification
          </div>
          <div className="mb-4 md:mb-8">
            <Image
              alt="Diamond Cut"
              src="/diamond-education-four-c-certificate.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
          <div className="px-2">
            {/* Content for the second column */}
            <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
              <p className="mb-2.5 text-justify">
                A diamond certificate (most commonly from labs GIA, IGI, SGL
                etc.) is a document you receive from an objective third-party
                lab that certifies a diamond with all its characteristics. A
                diamond certificate is what should be reviewed when considering
                the purchase of loose diamonds.The lab report or the certificate
                is issued by a grading body that mentions its main
                characteristics such as the cut, clarity, length and width, etc.
                A body of trained professionals observe, evaluate, and grade the
                diamonds for approving the certification. However, each diamond
                grading entity scrutinises the diamonds in different ways and a
                significant difference in the grades is expected. There are
                several laboratories that grade diamonds and provide the
                certification; however, it is necessary to know which ones are
                reliable and trustworthy.
              </p>
              <p className="mb-2.5 text-justify">
                For utmost excellence and purity, diamonds from Divine
                Solitaires are graded and are pre-certified by the top
                international laboratories such as GIA (Gemological Institute of
                America) and IGI (International Gemological Institute). At
                Divine Solitaires you can be assured to receive GIA
                certification for all diamonds that are 0.30 pointer and above.
                Apart from this, we at Divine Solitaires issue our own Quality
                Guarantee Certificate for each diamond purchased. Each solitaire
                diamond at Divine Solitaires is graded through stringent Quality
                Control (QC) measures and checked on 123 parameters, unlike most
                international labs that grade diamonds on just 40 parameters.
              </p>
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex justify-center items-center px-2">
              {/* Content for the first column */}
              <Image
                alt="Diamond Color"
                src="/diamond-education-four-c-certificates.jpg"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
            <div className="flex justify-center items-center">
              <span className="font-Montserrat text-left not-italic font-normal text-base text-gray-900">
                <p className="mb-2.5 text-justify">
                  GIA : Gemological Institute of America
                </p>
                <p className="mb-2.5 text-justify">
                  SGL : Solitaire Gemmological Laboratories
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondEducationFourCCertificate;
export { type Props as DiamondEducationFourCCertificateProps };
