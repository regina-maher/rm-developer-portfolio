import React, { useState } from "react";
import "./App.css";
import Home from "./components/domains/homeComponents/Home";
import About from "./components/domains/aboutComponent/About";
import Skills from "./components/domains/skillsComponents/Skills";
import Projects from "./components/domains/projectComponents/Projects";
import Navbar from "./components/domains/Navbar";
import Contact from "./components/domains/contactComponents/Contact";
import Works from "./components/domains/workComponents/Works";
import BookSite from "./components/domains/workComponents/workDomains/bookComponent/BookSite";
import MarketingSite from "./components/domains/workComponents/workDomains/marketingComponents/MarketingSite";
import Dictionary from "./components/domains/workComponents/workDomains/dictionaryComponents/Dictionary";
import Todo from "./components/domains/workComponents/workDomains/todoComponents/Todo";
import Weather from "./components/domains/workComponents/workDomains/weatherComponents/Weather";
import Pokedex from "./components/domains/workComponents/workDomains/pokedexComponent/Pokedex";
import { Routes, Route } from "react-router-dom";
import bikeTile from "./components/images/tiles/Tile - CloudBike.png";
import dictonTile from "./components/images/tiles/Tile - Dic_Ipad.png";
import iaauTile from "./components/images/tiles/Tile - IAAU.png";
import todoTile from "./components/images/tiles/Tile - TOdo.png";
import pokedexTile from "./components/images/tiles/Tile - pokedex.png";
import WeatherTile from "./components/images/tiles/Tile - Weather_Ipad.png";
import ScrollToTop from "./components/domains/ScrollToTop";

function App() {
  const projects = [
    {
      id: 1,
      img: `${dictonTile}`,
      text: "dictionary app",
      projectType: "web app",
      alt: "photo of react dictionary app on an Ipad",
      href: "https://sqigglydictionary.netlify.app/",
      github: "https://github.com/regina-maher/dictionary-react-project",
    },
    {
      id: 2,
      img: `${iaauTile}`,
      text: "website",
      projectType: "bookkeeping website",
      alt: "website for bookkeeping service",
      href: "http://italladdsup.com.au/",
      github: "https://github.com/regina-maher/italladdsup",
    },
    {
      id: 3,
      img: `${todoTile}`,
      text: "todo app",
      projectType: "web app",
      alt: "photo of react todo app",
      href: "https://todosquiggles.netlify.app/",
      github: "https://github.com/regina-maher/todo-list",
    },
    {
      id: 4,
      img: `${bikeTile}`,
      text: "website",
      projectType: "marketing website",
      alt: "advertising website for bike products",
      href: "https://cloudninebikes.netlify.app/",
      github: "https://github.com/regina-maher/marketing-website-bikes",
    },
    {
      id: 5,
      img: `${WeatherTile}`,
      text: "weather app",
      projectType: "web app",
      alt: "photo of react weather app on an Ipad",
      href: "https://bananaweather.netlify.app/",
      github: "https://github.com/regina-maher/banana-react-weather",
    },
    {
      id: 6,
      img: `${pokedexTile}`,
      text: "pokedex app",
      projectType: "web app",
      alt: "photo of react pokedex app",
      href: "https://pokedex-react-app-squiggle.netlify.app",
      github: "https://github.com/regina-maher/pokedex",
    },
  ];
  const [state, toggle] = useState(false);
  function toggleNavbar() {
    toggle(!state);
  }
  function handleTouch() {
    if (state) {
      toggleNavbar();
    }
  }
  return (
    <div className="App" onClick={handleTouch}>
      <ScrollToTop />
      <Navbar toggleNavbar={toggleNavbar} state={state} />
      <Routes>
        <Route exact path="/" element={<Home projects={projects} />} />
        <Route exact path="About" element={<About />} />
        <Route exact path="Skills" element={<Skills />} />
        <Route
          exact
          path="Projects"
          element={<Projects projects={projects} />}
        />
        <Route exact path="Contact" element={<Contact />} />
        <Route exact path="Works" element={<Works projects={projects} />} />
        <Route
          exact
          path="BookSite"
          element={<BookSite projects={projects} />}
        />
        <Route
          exact
          path="MarketingSite"
          element={<MarketingSite projects={projects} />}
        />
        <Route
          exact
          path="Dictionary"
          element={<Dictionary projects={projects} />}
        />
        <Route exact path="Todo" element={<Todo projects={projects} />} />
        <Route exact path="Weather" element={<Weather projects={projects} />} />
        <Route exact path="Pokedex" element={<Pokedex projects={projects} />} />
      </Routes>
    </div>
  );
}

export default App;
