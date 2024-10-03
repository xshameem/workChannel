import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import SplitType from "split-type";

const gsapFunc = (
  target: HTMLElement[] | null,
  stat: {
    stag?: number;
  }
) => {
  return gsap.fromTo(
    target,
    {
      y: -200,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: stat.stag ? stat.stag : 0,
      delay: 1.4,
    }
  );
};

const CaseStudies = () => {
  useEffect(() => {
    const docEl = document.querySelector(".caseContainer_header-title");
    const tsplit = new SplitType(docEl as HTMLElement);
    const docEl2 = document.querySelector(".caseContainer_content-dat");
    const tsplit2 = new SplitType(docEl2 as HTMLElement);
    gsapFunc(tsplit.words, {
      stag: 0.18,
    });

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".caseContainer",
        start: "0% 50%",
        end: "38% 60%",
        toggleActions: "play play reverse reverse",
        scrub: 2,
      },
    });

    tl.fromTo(
      tsplit2.words,
      {
        y: 200,
      },
      {
        y: 0,
        stagger: 0.04,
      }
    );
  });

  return (
    <div className="caseContainer">
      <div className="caseContainer_header">
        <div className="caseContainer_header-title">
          <h1>Case Studies</h1>
        </div>
        <div className="caseContainer_header-line"></div>
      </div>
      <div className="caseContainer_content">
        <div className="caseContainer_content_pad">
          <p className="caseContainer_content-dat">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            dolore voluptatem vitae iste. Ipsum quam error perspiciatis atque
            asperiores totam numquam odit similique sapiente vitae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
