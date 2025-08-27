import { useEffect, useState } from 'react'
import { SelectedPage } from "./shared/types";
import Navbar from './scenes/navbar';
import Home from './scenes/home';
import Services from './scenes/services';
import About from './scenes/about';
import Contact from './scenes/contact';


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.screenY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.screenY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
     <div className="app bg-white">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      {/* <Footer /> */}
    </div>
  )
}

export default App
