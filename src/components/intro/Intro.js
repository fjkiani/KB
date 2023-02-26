import React, { useEffect, useRef } from "react";
import "./intro.css";
import { gsap } from "gsap";

const Intro = () => {
  var timeline = gsap.timeline();
  let section1,
    section1_picture,
    section1_content = useRef();
  useEffect(() => {
    // console.log(section1_content.children);
    timeline
      .fromTo(
        section1,
        { width: 0 },
        { width: "100%", transformOrigin: "top", delay: 4 },
        "this is section 1"
      )
      .fromTo(
        section1_content,
        { display: "none" },
        { display: "block" },
        "section 1 content"
      )
      .fromTo(
        section1_picture,
        { opacity: 0, translateY: "50px" },
        { opacity: 1, translateY: 0 },
        "section 1 content heading"
      )
      .fromTo(
        section1_content.children[0],
        { translateY: "-50px", opacity: 0 },
        { translateY: 0, opacity: 1 },
        "section 1 content heading"
      )
      .fromTo(
        section1_content.children[1],
        { translateY: "50px", opacity: 0 },
        { translateY: 0, opacity: 1, delay: 0.2 },
        "section 1 content heading"
      )
      .fromTo(
        section1_content.children[2],
        { translateY: "-50px", opacity: 0 },
        { translateY: 0, opacity: 1, delay: 0.2 },
        "section 1 content heading"
      );
    // eslint-disable-next-line
  }, []);

  return (
    <div
      ref={(elem) => (section1 = elem)}
      className="bg-[#F9F9FC] h-screen w-full flex justify-center"
    >
      <div ref={(elem) => (section1_picture = elem)} className="h-full w-full ">
        <img
          className="h-[65%] w-full object-cover object-center hidden md:block"
          src="/image.png"
          alt=""
        />
        <img
          className="h-[72%] w-full object-cover object-top md:hidden"
          src="/image-2.png"
          alt=""
        />
        <div
          ref={(elem) => (section1_content = elem)}
          className="mt-2 md:mt-5 intro px-5 text-center"
        >
          <h3 className="name text-[35px] md:text-[60px] font-[700] mb-[14px]">
            KHALED A. BEYDOUN
          </h3>
          <p className="text ">LAW PROFESSOR AND AUTHOR</p>
          <div className="social mt-[20px]">
            <ul>
              <li>
                {/* eslint-disable-next-line */}
                <a href="https://twitter.com/KhaledBeydoun" target={"_blank"}>
                  <img className="svg custom" src="/svg/social/tw.svg" alt="" />
                </a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a
                  href="https://www.instagram.com/khaledbeydoun/"
                  target={"_blank"}
                >
                  <img
                    className="svg custom"
                    src="/svg/social/64x64.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a
                  href="https://www.linkedin.com/in/khaled-a-beydoun-2b9b45113/"
                  target={"_blank"}
                >
                  <img className="svg custom" src="/svg/social/in.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
          {/* <div>
            <a href="#about" className="scroll-down flex items-center">
              Scroll down{" "}
              <img
                src="/icons8-arrow-down-96.png"
                className="ml-1 h-[25px] w-[25px] object-cover font-bold "
                alt=""
              />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
