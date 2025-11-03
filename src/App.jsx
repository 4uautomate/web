import { useState } from "react";

import "./App.css";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Brands from "./components/Brands.jsx";
import Features from "./components/Features.jsx";
import BoxContent from "./components/BoxContent.jsx";
import TextContent from "./components/TextContent.jsx";
import Features12 from "./components/Features12.jsx";
import Statistic from "./components/Statistic.jsx";
import Divider from "./components/Divider.jsx";
import TextContent2 from "./components/TextContent2.jsx";
import ImageContent from "./components/ImageContent.jsx";
import Features6 from "./components/Features6.jsx";
import Integrations from "./components/Integrations.jsx";
import TextContentNumbers from "./components/TextContentNumbers.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Faq from "./components/Faq.jsx";
import Baner from "./components/Baner.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      {/* PAGE CONTENT ============================================= -->	*/}
      <div id="page" className="page font--jakarta">
        <Header />
        <Hero />

        <Features />
        <BoxContent />
        <TextContent />
        <Features12 />
        <Statistic />
        <Divider />
        <TextContent2 />
        <ImageContent />
        <Features6 />
        <Divider />
        <Integrations />
        <TextContentNumbers />

        <Faq />
        <Baner />
        <Footer />
      </div>
    </>
  );
}

export default App;
