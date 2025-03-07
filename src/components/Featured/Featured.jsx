import TitleRed from "../../images/who-we-are/title-bg.svg";
import MainButton from "../MainButton";

function Featured() {
  return (
    <>
      <section id="featured" className="page-padding py-[125px] bg-white">
        <div className="container">
          {/* title */}
          <div className="flex flex-col text-center items-center relative ">
            <p className="font-semibold text-white text-[15px] relative uppercase z-10 ">
              OUR FEATURED CLASS
            </p>
            <img src={TitleRed} alt="text_bg" className="w-[240px] absolute -top-[10px]" />
            <h2 className="text-[36px] text-black font-bold my-10">We Are Offering Best Flexible Classes</h2>
          </div>
          {/* grid */}
          <div className="grid grid-cols-4 grid-rows-2 gap-7 h-full mt-7 md1000:flex md1000:flex-col">
            <div className="item-0-div relative">
              <div className="item-0 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[30px] font-bold">Fitness</p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
                  Wednesday: 9:00am-10:00am
                </p>
              </div>
            </div>

            <div className="item-1-div relative">
              <div className="item-1 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[30px] font-bold">Cross-Fit</p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">Friday: 10:00am-11:00am</p>
              </div>
            </div>

            <div className="item-2-div relative">
              <div className="item-2 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[30px] font-bold">Power Lifting</p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">Saturday: 9:00am-10:00am</p>
              </div>
            </div>

            <div className="item-3-div relative">
              <div className="item-3 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[30px] font-bold">Power Yoga</p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">Friday: 1:00pm-2:00pm</p>
              </div>
            </div>

            <div className="item-4-div relative">
              <div className="item-4 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[30px] font-bold">Cardio & HIIT</p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">Sunday: 6:00pm-7:00pm</p>
              </div>
            </div>

            <div className="item-5-div relative">
              <div className="item-5 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[30px] font-bold">Workout</p>
                <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">Monday: 4:00pm-5:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* featured cta */}
      <div className="featured-cta flex justify-center text-left items-center md1000:bg-none md1000:bg-[#ff0336] ">
        <div className="container page-padding ">
          <div className="flex items-center md1000:flex-col md1000:gap-[48px]  md1000:text-center">
            <h2 className="text-white font-bold text-[37px] md1000:text-[30px] max-w-6xl px-7 leading-[1.2] min450:text-[24px] ">
              We Are Always Providing Best Fitness Service For You
            </h2>
            <MainButton
              color={`text-black`}
              bg={`bg-white`}
              text="Join With Us"
              arrowColor={`text-black`}
              goTo="/contact"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
