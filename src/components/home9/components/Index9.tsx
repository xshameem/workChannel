import "../scss/index.css";
import CaseStudies from "./CaseStudies";

import Hero from "./Hero";
import Hero2 from "./Hero2";
import Nav from "./Nav";

const Index9 = () => {
  return (
    <div className="backgroundCont">
      <Nav />

      <main>
        <Hero2 />
        <CaseStudies />
      </main>
    </div>
  );
};

export default Index9;
