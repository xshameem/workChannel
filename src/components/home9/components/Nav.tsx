import gsap from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

const gsapFunc = (
  target: HTMLElement[] | null,
  stat: {
    from: number;
    to: number;
    stag?: number | null;
    delay?: number;
  }
) => {
  const { from, to, delay, stag } = stat;
  return gsap.fromTo(
    target,
    {
      y: from,
    },
    {
      y: to,
      stagger: stag ? stag : 0.05,
      delay: delay,
    }
  );
};

const Nav = () => {
  useEffect(() => {
    const docEl = document.querySelector(".navLi1");
    const docEl1 = document.querySelector(".navLi2");
    const docEl2 = document.querySelector(".navLi3");
    const splTxt = new SplitType(docEl as HTMLElement);
    const splTxt1 = new SplitType(docEl1 as HTMLElement);
    const splTxt2 = new SplitType(docEl2 as HTMLElement);

    const ctx = gsap.context(() => {
      gsapFunc(splTxt.words, {
        from: -100,
        to: 0,
        stag: 0.04,
      });
      gsapFunc(splTxt1.words, {
        from: -270,
        to: 0,
        stag: 0.08,
      });
      gsapFunc(splTxt2.words, {
        from: -300,
        to: 0,
        stag: 0.12,
      });
    });

    return () => {
      ctx.revert();
    };
  });

  return (
    <>
      <nav className="nav-container">
        <div className="nav-container_a">Hello World</div>
        <div className="nav-container_b">
          <li className="navLi1">Home</li>
          <li className="navLi2">Latest</li>
          <li className="navLi3">Trends</li>
        </div>
        <div className="nav-container_b">
          <button>Sell</button>
        </div>
      </nav>
    </>
  );
};

export default Nav;
