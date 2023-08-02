import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Search from "./Components/SearchDiv/Search";
import JobCard from "./Components/JobCardDiv/JobCard";
import Footer from "./Components/FooterDiv/Footer";

const App = () => {
  return (
    <div className="main-page">
      <NavBar />
      <Search />
      <JobCard />
      <Footer />
    </div>
  );
};

export default App;
