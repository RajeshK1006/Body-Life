import TitleRed from "../../images/who-we-are/title-bg.svg";
import BgText from "../../images/pricing/bg-text.png";
import BgDumbell from "../../images/pricing/bg-dumbell.png";
import PricingBox from "./PricingBox";

import Img1 from "../../images/pricing/img1.jpg";
import Img2 from "../../images/pricing/img2.jpg";
import Img3 from "../../images/pricing/img3.jpg";

function Pricing() {
  return (
    <>
      <section id="pricing" className="pricing-section relative">
        <div className="container page-padding py-[120px] ">
          <img src={BgText} className="left-0 absolute" alt="bg_img" />
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">PRICING CHART</p>
            <img src={TitleRed} alt="text_bg" className="w-[230px] absolute -top-[10px] " />
            <h2 className="text-[34px] font-bold mb-4">Exclusive Pricing Plan</h2>
          </div>
          {/* pricing boxes */}
          <div className="flex gap-10 mt-32 relative z-[2] md1000:flex-col md1000:items-center ">
            <PricingBox img={Img1} price="2999" category={"Quarterly"} />
            <PricingBox img={Img2} price="4999" category={"Half-Yearly"} />
            <PricingBox img={Img3} price="9999" category={"Yearly"} />
          </div>
          <img src={BgDumbell} alt="bg_icon" className="right-0 bottom-0 absolute z-[1]" />
        </div>
      </section>
    </>
  );
}

export default Pricing;
