import gsap from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

const Hero2 = () => {
  const gsapFunc = (
    target: HTMLElement[] | null,
    stat: {
      from: number;
      to: number;
      stag?: number | null;
      delay?: number;
    }
  ) => {
    const { from, to, stag, delay } = stat;
    return gsap.fromTo(
      target,
      {
        y: from,
        opacity: 0,
      },
      {
        y: to,
        stagger: stag ? stag : 0.05,
        delay: delay,
        opacity: 1,
      }
    );
  };
  useEffect(() => {
    const docEl = document.querySelector(".contentData_textA");
    const spltTxt = new SplitType(docEl as HTMLElement);
    const docEl2 = document.querySelector(".contentData_textB");
    const docEl3 = document.querySelector(".contentImage_text");
    const spltTxt2 = new SplitType(docEl2 as HTMLElement);
    const spltTxt3 = new SplitType(docEl3 as HTMLElement);

    const ctx = gsap.context(() => {
      gsapFunc(spltTxt.words, {
        from: -200,
        to: 0,
        delay: 0.6,
      });
      gsapFunc(spltTxt2.words, {
        from: 200,
        to: 0,
        stag: 0.04,
        delay: 0.4,
      });
      gsapFunc(spltTxt3.chars, {
        from: 600,
        to: 0,
        stag: 0.03,
        delay: 0.8,
      });

      gsap.fromTo(
        ".circleData",
        {
          scale: 0,
        },
        {
          scale: 2,
          duration: 1.5,
        }
      );
      gsap.fromTo(
        ".circleData2",
        {
          scale: 0,
        },
        {
          scale: 1.5,
          duration: 1.3,
        }
      );
      gsap.fromTo(
        ".circleData3",
        {
          scale: 0,
        },
        {
          scale: 1.5,
          duration: 1.5,
        }
      );
    });

    return () => {
      ctx.revert();
    };
  });
  return (
    <>
      <div className="hero_content">
        <div className="hero_content-a">
          <div className="circleData"></div>
          <div className="circleData2"></div>
          <div className="circleData3"></div>
          <div className="contentData">
            <div id="changeContent" className="contentData_textA">
              <h1>Hello World</h1>
            </div>
            <div className="contentData_textB">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
                excepturi voluptatibus sint!
              </p>
            </div>
          </div>
        </div>
        <div className="hero_content-b">
          <div className="contentImage">
            <div className="contentImage_a">
              <div className="contentImage_text">Hello World</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
