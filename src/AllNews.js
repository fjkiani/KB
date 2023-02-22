import React from "react";
import Headersecond from "./components/Header2/Headersecond";
import { Recentews } from "./news";

const AllNews = () => {
  return (
    <>
      <div className=" w-full relative">
        <Headersecond />
        <div className="edina_tm_services ">
          <div id="Blog" className="edina_tm_title bg-[#F9F9FC] px-10 py-10">
            <div className="relative overflow-hidden">
              <h3>Latest News</h3>
            </div>
            <div className="relative overflow-hidden">
              <p>
                Professor Beydoun’s insight has been featured in the Washington
                Post, the New York Times, San Francisco Chronicle, Time, Salon,
                and ESPN; and television and radio news programming including
                CNN, the BBC, Fox, NBC and ABC News.
              </p>
            </div>
            <div className="publications mt-5 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-4 overflow-hidden">
              {/* <div className="hidden"></div> */}
              {Recentews.map((elem, index) => {
                return (
                  <a
                    href={elem.link}
                    target={"_blank"}
                    rel="noreferrer"
                    key={index}
                  >
                    <div className="relative card max-w-sm bg-white rounded-lg h-fit">
                      <div className="profileImage  relative">
                        <img
                          src={elem.FeaturedImage}
                          alt=""
                          className="w-full object-cover  h-[200px] md:h-[230px]"
                        />
                        {elem.WebsiteLogo && (
                          <div className="webLogo absolute top-2 left-2 rounded-xl h-16 w-16 object-cover">
                            <img
                              src={elem.WebsiteLogo}
                              alt=""
                              className="h-full w-full"
                            />
                          </div>
                        )}
                      </div>
                      <div className="px-5 py-5">
                        <h1 className="font-bold text-xl">{elem.Title}</h1>
                        <p className="py-5">
                          {elem.Description.length > 100
                            ? elem.Description.substring(0, 100)
                            : elem.Description}{" "}
                          ...
                        </p>
                        <a href={elem.link} target={"_blank"} rel="noreferrer">
                          <button className="w-full bg-transparent text-lg hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Read More
                          </button>
                        </a>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllNews;
