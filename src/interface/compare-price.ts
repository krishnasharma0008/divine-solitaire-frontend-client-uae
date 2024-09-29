import Clarity, { ClarityRound ,ClarityRoundcarat} from "../enum/clarity-enum";
import Colour from "../enum/colour-enum";
import Shape from "../enum/shape-enum";

interface ComparePrice {
  shape: Shape;
  cts: number;
  colour: Colour;
  clarity: Clarity | ClarityRound | ClarityRoundcarat;
  day: number;
  month: number;
  year: number;
}

export { type ComparePrice };
