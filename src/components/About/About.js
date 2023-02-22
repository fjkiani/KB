import React from "react";
import "./about.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  let title,
    about_content,
    about_image = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    // eslint-disable-next-line
    gsap.fromTo(
      title,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: title,
          toggleActions: "play none none none",
          start: "20px 90%",
          // markers: true,
        },
      }
    );
    gsap.fromTo(
      about_content,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        // delay: 0.3,
        scrollTrigger: {
          trigger: about_content,
          toggleActions: "play none none none",
          start: "100% 80%",
          // markers: true,
        },
      },
      "this is 2nd animation"
    );
    gsap.fromTo(
      about_image,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.5,
        // delay: 0.3,
        scrollTrigger: {
          trigger: about_image,
          toggleActions: "play none none none",
          start: "100px 80%",
          // markers: true,
        },
      },
      "this is 3rd animation"
    );
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="edina_tm_about pb-[50px] md:pb-[100px] md:pt-[100px] pt-10"
      id="about"
    >
      <div className="container">
        <div className="about_title  overflow-hidden">
          <h3 ref={(elem) => (title = elem)}>About Me</h3>
        </div>
        <div className="content flex flex-col md:flex-row">
          <div
            className="flex-1 leftpart wow fadeInLeft"
            data-wow-duration="1s"
          >
            <div className="info relative overflow-hidden">
              {/* <h3>
                Hi, I'm <span>Rogers Nelson</span>
              </h3> */}
              <p
                ref={(elem) => (about_content = elem)}
                className="relative space-y-4 tracking-wider max-w-full md:max-w-[90%]"
              >
                <p>
                Profesosor Khaled A. Beydoun is a law professor, author and public intellectual. 
                </p>
                <br/>
                <p>He serves as a law professor at Wayne State University, a Scholar-in-Residence at the Berkman Klein Center at Harvard University, and Associate Director of the Damon J. Keith Center for Civil Rights in Detroit. Professor Beydoun is author of the critically acclaimed book American Islamophobia: Understanding the Roots and Rise of Fear, and co-editor of Islamophobia and the Law – published by University of Cambridge Press.  
                </p>
                </p>
              
              {/* eslint-disable-next-line */}
              <a
                href="https://docs.wixstatic.com/ugd/7919ad_e52036fc8b8b4ffe90c65f918f19c5ea.pdf"
                target={"_blank"}
              >
                <button className="mt-5 bg-transparent text-2xl hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded">
                  Learn
                </button>
              </a>
            </div>
            {/* <div className="my_skills">
              <h3 className="title">What is my skill level?</h3>
              <p className="desc">
                Khaled A. Beydoun is a leading thinker on national security,
                civil rights and constitutional law. He has published a series
                of books, including the critically acclaimed American
                Islamophobia: Understanding the Roots and Rise of Fear, featured
                his insights in the New York Times and the Washington Post, and
                his work has been featured in leading law journals. He serves as
                a law professor at the University of Arkansas-Fayetteville
                School of Law and Senior Affiliated Faculty at U.C.-Berkeley, a
                leading public intellectual on matters linked to Islamophobia,
                national and cyber-security, and civil rights.
              </p>
              <div className="wrapper">
                <div className="left">
                  <div className="dodo_progress">
                    <div className="progress_inner" data-value="95">
                      <span className="label">React.Js</span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in"></div>
                        </div>
                      </div>
                    </div>
                    <div className="progress_inner" data-value="80">
                      <span className="label">Photoshop</span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in"></div>
                        </div>
                      </div>
                    </div>
                    <div className="progress_inner" data-value="90">
                      <span className="label">Illustrator</span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <div className="dodo_progress">
                    <div className="progress_inner" data-value="95">
                      <span className="label">Vue.Js</span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in"></div>
                        </div>
                      </div>
                    </div>
                    <div className="progress_inner" data-value="80">
                      <span className="label">Figma</span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in"></div>
                        </div>
                      </div>
                    </div>
                    <div className="progress_inner" data-value="90">
                      <span className="label">WordPress</span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div
            className="flex-1 rightpart wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="image relative overflow-hidden">
              <img
                ref={(elem) => (about_image = elem)}
                className="opacity-100 h-[450px] object-cover object-bottom"
                src="/image.png"
                alt=""
              />
              <div
                className="main opacity-100"
                data-img-url="/aboutimg.jpeg"
              ></div>
              {/* <div className="experience" data-wow-duration="1.2s">
                <div className="info">
                  <h3>6+ Years</h3>
                  <span>Of Experiance</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;