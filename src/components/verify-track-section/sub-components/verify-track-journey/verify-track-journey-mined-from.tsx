interface Props {
  children?: React.ReactNode;
}

const VerifyTrackJourneyMinedFrom: React.FC<Props> = () => {
  return (
    <div className="w-full md:w-[716px] flex flex-col items-center gap-14 px-4">
      <div className="flex flex-col items-start gap-9 self-stretch">
        <div className="h-[300px] self-stretch bg-bgdiajurmine"></div>

        <div className="flex flex-col items-start gap-3">
          <div className="text-black text-lg font-montserrat font-semibold leading-normal">
            Mined From
          </div>
          <div className="flex flex-col self-stretch">
            <span className="tetext-black text-base font-montserrat font-normal leading-normal">
              Every Divine Solitaires diamond is ethically sourced from one of
              these mines - Canada, Botswana, Russia, South Africa, Australia &
              Angola. Diamond sourced from these, follow internationally
              recognised labour & environment standards.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyTrackJourneyMinedFrom;
export { type Props as VerifyTrackJourneyMinedFromProps };
