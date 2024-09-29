import { TabNavWithSection, TabNavWithSectionProps } from "@/components";

import VerifyTrackJourneyAboutDiamond from "./verify-track-journey-about-diamond";
import VerifyTrackJourneyDiamondFormed from "./verify-track-journey-diamond-formed";
import VerifyTrackJourneyMinedFrom from "./verify-track-journey-mined-from";

const VerifyTrackJourney: React.FC = () => {
  const tabProps: TabNavWithSectionProps = {
    initialTab: 1,
    orientation: "horizontal",
    sections: [
      {
        label: "Diamond Formed",
        component: <VerifyTrackJourneyDiamondFormed />,
      },
      {
        label: "Mined From",
        component: <VerifyTrackJourneyMinedFrom />,
      },
      {
        label: "About Diamond",
        component: <VerifyTrackJourneyAboutDiamond />,
      },
    ],
  };

  return (
    <div>
      <TabNavWithSection {...tabProps} />
    </div>
  );
};

export default VerifyTrackJourney;
