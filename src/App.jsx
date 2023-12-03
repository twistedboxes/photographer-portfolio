import { useState } from "react";
import Header from "./Components/Header";
import ImageSlider from "./Components/ImageSlider";
import Menu from "./Components/Menu";
import Projects from "./Components/Pages/Projects";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";

function App() {
  const [page, setPage] = useState("Home");
  function pageSelect(ev) {
    let currentPage = ev.target.dataset.page;
    setPage(currentPage);
  }
  return (
    <div className="w-screen max-w-full min-h-screen h-full flex flex-col px-4 bg-gray-50 ">
      <Header pageDisplay={pageSelect} />
      <Menu pageDisplay={pageSelect} />
      <Projects display={page} />
      <Home display={page} />
      <Contact display={page} />
      <About display={page} />
    </div>
  );
}

export default App;
