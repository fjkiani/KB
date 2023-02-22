import "./sidebar.css";
import { gsap } from "gsap";
import { useEffect } from "react";
import { useRef } from "react";
const Sidebar = ({ homepage }) => {
  const timeline = gsap.timeline();
  let sidebar,
    menu = useRef();
  const animation = () => {
    timeline
      .fromTo(
        sidebar,
        { translateX: "-100%" },
        { translateX: 0, delay: 4 },
        "this is 1"
      )
      // .to(sidebar.children, { display: "block" }, "this is 234567");
      .fromTo(
        menu.children,
        { display: "none", opacity: 0 },
        { display: "block", opacity: 1, stagger: 0.2 },
        "menu animation"
      );
  };
  useEffect(() => {
    if (homepage) {
      animation();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div
      ref={(elem) => (sidebar = elem)}
      className="hidden md:block sidebar sticky top-0 left-0  shadow-lg w-[20%] bg-white h-screen"
    >
      <div className="logo border-b-[1px]  border-b-[#CBD3D9]">
        <img className="px-10 py-5 " src="/logo (1).png" alt="" />
      </div>
      <div className="menu">
        <ul ref={(elem) => (menu = elem)} className="anchor_nav">
          <li>
            <div className="list_inner current">
              <a href="/">
                <img className="svg custom" src="/svg/home.svg" alt="" />
                Home
              </a>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <a href="#about">
                <img className="svg custom" src="/svg/human.svg" alt="" />
                About
              </a>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <a href="#publications">
                <img className="svg custom" src="/svg/service.svg" alt="" />
                Publications
              </a>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <a href="#books">
                <img className="svg custom" src="/svg/portfolio.svg" alt="" />
                Books
              </a>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <a
                href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2295370"
                target={"_blank"}
                rel="noreferrer"
              >
                <img className="svg custom" src="/svg/blog.svg" alt="" />
                Research
              </a>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <a href="#Blog">
                <img className="svg custom" src="/svg/blog.svg" alt="" />
                Recent News
              </a>
            </div>
          </li>
          <li>
            <div className="list_inner">
              <a href="#contact">
                <img className="svg custom" src="/svg/testimonial.svg" alt="" />
                Contact
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
