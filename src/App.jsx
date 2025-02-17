import React from 'react';
import {useEffect, useState} from 'react';

import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import TitleCard from "./components/TitleCard";
import News from "./components/News";
import SubTitle from "./components/SubTitle";

const App = () => {
  
  return (
    <div>
      <Header />
      <TitleCard />
      <SubTitle />
      <Cards />
      <News />
      <Footer />
    </div>
  )
}

export default App;