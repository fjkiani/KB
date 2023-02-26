import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="copyright bg-main_bg_color py-4 text-black shadow-md flex flex-col items-center space-y-5 lg:space-y-0 lg:flex-row justify-between px-8">
        <span className="text-sm text-center">
          copyright @KHALED A. BEYDOUN 2022
        </span>
        <div className="social flex items-center">
          {/* <h2 className="text-[17px]">Follow on: </h2> */}
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
        <span className="text-sm md:mt-0 text-center">
          Powered, Designed and Engineered by{" "}
          <a
            href="https://joytech.world/"
            target={"_blank"}
            rel="noreferrer"
            className="font-bold"
          >
            JOY TECH
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
