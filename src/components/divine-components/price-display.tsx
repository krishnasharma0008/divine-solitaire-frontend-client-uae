import { formatByCurrency } from "@/util";

interface PriceDisplayProps {
  price: number;
  carats: number;
  clocale: string;
  ccode: string;
  className?: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price,
  carats,
  clocale,
  ccode,
}) => (
  <div className="w-full text-center text-gold flex flex-col gap-8 items-center font-semibold font-body">
    <span className="text-2xl leading-6">Retail Price:</span>

    <span className="bg-[#FFF9F2] w-min leading-10 text-4xl p-6 border border-[#BEBEBE]">
      {clocale &&
        ccode &&
        ccode !== "" &&
        `${formatByCurrency(price * carats, clocale, ccode)}`}
    </span>
  </div>
);

export default PriceDisplay;
