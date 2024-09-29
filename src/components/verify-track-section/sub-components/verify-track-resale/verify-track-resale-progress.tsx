import Image from "next/image";

interface Props {
  children?: React.ReactNode;
}

const VerifyTrackResaleProgress: React.FC<Props> = () => {
  return (
    <div className="w-full">
      <div className="mt-16 pt-14">
        <div className="w-full text-center m-2.5">
          <Image
            src="/undraw-in-progress.png"
            alt="Work in progress"
            className="m-auto  mb-6"
            height={193}
            width={288}
          />
          <span className="font-montserrat text-gray-800 text-sm font-semibold">
            Your request is in review...
          </span>
        </div>
      </div>
    </div>
  );
};

export default VerifyTrackResaleProgress;
export { type Props as VerifyTrackResaleProgressProps };
