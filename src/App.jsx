import React from "react";
import About from "./sections/about/About";
import Navbar from "./layout/navbar/Navbar";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import OurServices from "./sections/ourServices/OurServices";
import Contact from "./sections/contact/Contact";
import Testimonial from "./sections/testimonial/Testimonial";
import FAQs from "./sections/faqs/FAQs";
import Portfolio from "./sections/portfolio/Portfolio";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/ThemeContext";

const App = () => {
  const { themeState } = useThemeContext();
  return (
    <>
      <main className={`${themeState.primary} ${themeState.background}`}>
        <Navbar />
        <Header />
        <About />
        <OurServices />
        {/* <Portfolio /> */}
        {/* <Testimonial /> */}
        {/* <FAQs /> */}
        {/* <Contact /> */}
        <Footer />
        <Theme />
      </main>
    </>
  );
};

export default App;
