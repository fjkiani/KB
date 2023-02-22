import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Preloader = ({ setdisplay }) => {
  let loading1,
    span1,
    preloader = useRef();
  var timeline = gsap.timeline();

  useEffect(() => {
    // console.log(span1.children);
    timeline
      .to(
        loading1.children[2],
        { opacity: 0, display: "none", duration: 0.3, delay: 0.3 },
        "1"
      )
      .to(
        loading1.children[0],
        {
          duration: 0.5,
          css: { translateX: "-100%" },
        },
        "2"
      )
      .to(
        loading1.children[1],
        {
          duration: 0.5,
          css: { translateX: "100%" },
        },
        "2"
      )
      .to(loading1, { display: "none" }, "2")
      .fromTo(
        span1.children[0],
        { opacity: 0, translateX: "-50px" },
        { opacity: 1, translateX: 0, duration: 0.5 },
        "span1"
      )
      .fromTo(
        span1.children[1].children[0],
        { opacity: 0, translateY: "50px" },
        { opacity: 1, translateY: 0 },
        "span1"
      )
      .fromTo(
        span1.children[1].children[1],
        { opacity: 0, translateY: "-50px" },
        { opacity: 1, translateY: 0 },
        "span1"
      )
      .to(span1, { translateY: "-100%", delay: 1 }, "hiding span")
      .to(preloader, { display: "none" });
    setdisplay(true);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      ref={(elem) => (preloader = elem)}
      className=" preloader h-screen w-screen overflow-hidden fixed z-[1001]"
    >
      <div
        ref={(elem) => (loading1 = elem)}
        className="z-[2] bg-transparent loading1 relative h-screen w-screen flex"
      >
        <div className="w-1/2 bg-[#3a3b3c]"></div>
        <div className="w-1/2 bg-[#3a3b3c]"></div>
        <h1 className="absolute h-full w-full op-1/2 flex items-center justify-center text-white text-5xl animate-pulse">
          Loading...
        </h1>
      </div>
      <div
        className="z-[1] absolute top-0 left-0s  h-screen w-screen bg-white flex flex-col md:flow-row space-x-3 space-y-3 items-center justify-center bg-main-color-light text-black font-bold  text-3xl md:text-7xl overflow-hidden"
        ref={(elem) => (span1 = elem)}
      >
        <img
          src="/hero image.jpeg"
          alt=""
          className="h-64 w-64 md:h-72 md:w-72 object-cover"
        />
        <div>
          <h1
            // ref={(elem) => (span1_txt = elem)}
            className="text-center text-3xl md:text-6xl font-bold"
          >
            KHALED A. BEYDOUN
          </h1>
          <h1 className="mt-3 text-center text-lg md:text-xl font-semibold">
            Law Professor & Author
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
