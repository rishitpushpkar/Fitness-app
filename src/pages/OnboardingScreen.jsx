import image1 from "../assets/image 13.png";
import nextIcon from "../assets/Group 1.png";
import image2 from "../assets/image 16.png";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function OnboardingScreen() {
  const splideRef = useRef(null);
  const navigate = useNavigate();

  const nextSlide = () => {
    if (splideRef) {
      if (splideRef.current.splide.index == 1) {
        navigate("/login");
      } else {
        splideRef.current.splide.go("+1");
      }
    }
  };

  return (
    <>
      <div className="h-screen relative">
        <Splide
          className="splideElement p-0"
          aria-label="My Favorite Images"
          hasTrack={false}
          options={{
            width: "100vw",
            height: "100%",
            gap: "5%",
            padding: { left: "20%", right: "20%" },
            focus: "center",
            pagination: false,
            breakpoints: {
              1800: {
                gap: "10%",
                padding: { left: "10%", right: "10%" },
              },
              1300: {
                gap: "10%",
                padding: { left: "2%", right: "2%" },
              },
              1025: {
                gap: "10%",
                padding: "0%",
              },
            },
          }}
          ref={splideRef}
        >
          <div className="changeCursorArrowBox">
            <div className="rightArea" onClick={nextSlide}></div>
          </div>
          <SplideTrack>
            <SplideSlide>
              <div
                className={`h-screen flex flex-col  sm:w-full sm:max-w-md mx-auto pt-10`}
              >
                <div className="mx-[5%] p-3 text-end">
                  <Link
                    to="/login"
                    className="font-medium text-[#9FB2FF]  hover:text-blue-500 underline"
                  >
                    Skip
                  </Link>
                </div>
                <div className="flex justify-center py-[5%]">
                  <img src={image1} alt="Running" />
                </div>
                <div className="p-4 ">
                  <h1 className=" text-xl font-semibold font-[Montserrat]">
                    Track Your Goal
                  </h1>
                  <p className=" font-medium text-[16px] text-[#787878]">
                    Don&apos;t worry if you have trouble determining your goals,
                    We can help you determine your goals and track your goals
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="h-screen sm:w-full sm:max-w-md flex flex-col mx-auto  pt-10">
                <div className="mx-[5%] p-3 text-end justify-self-start">
                  <Link
                    to="/login"
                    className="font-medium text-[#9FB2FF]  hover:text-blue-500 underline"
                  >
                    Skip
                  </Link>
                </div>
                <div className="flex justify-center my-[5%]">
                  <img src={image2} alt="Running" />
                </div>
                <div className="p-3">
                  <h1 className=" text-xl font-semibold font-[Montserrat]">
                    Get Burn
                  </h1>
                  <p className=" font-medium text-[16px] text-[#787878]">
                    Let&apos;s keep burning to achieve your goals, it hurts only
                    temporarily, if you give up now you will be in pain forever
                  </p>
                </div>
              </div>
            </SplideSlide>
          </SplideTrack>
        </Splide>
        <div className="flex justify-end mx-[5%]  absolute bottom-8 right-5">
          <img src={nextIcon} alt="" onClick={nextSlide} />
        </div>
      </div>
    </>
  );
}
