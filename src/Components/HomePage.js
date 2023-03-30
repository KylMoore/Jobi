import HomeHeader from "./homePage/HomeHeader";
import GetTalentedExpertsInJobi from "./homePage/GetTalentedExpertsInJobi";
import HowItWorks from "./homePage/HowItWorks";
import MostDemandingCategories from "./homePage/MostDemandingCategories";
import FindTheBestTalentedExpert from "./homePage/FindTheBestTalentedExpert";
import TrustedByLeadingStartups from "./homePage/TrustedByLeadingStartups";
import CollaborationWithTopBrands from "./homePage/CollaborationWithTopBrands";
import JobiGuides from "./homePage/JobiGuides";
import MatchedJob from "./homePage/MatchedJob";
import MustCompleteJobPortal from "./homePage/MustCompleteJobPortal";

const HomePage = ({ closePageOptions }) => {
  return (
    <div>
      <HomeHeader />
      <MostDemandingCategories />
      <GetTalentedExpertsInJobi />
      <HowItWorks />
      <FindTheBestTalentedExpert />
      <TrustedByLeadingStartups />
      <CollaborationWithTopBrands />
      <JobiGuides />
      <MatchedJob />
      <MustCompleteJobPortal />
    </div>
  );
};

export default HomePage;
