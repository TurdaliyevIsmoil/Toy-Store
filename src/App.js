import React from "react";
import Category from "./components/category";
import { stuffed, wooden } from "./components/category/data";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import RecomendedProducts from "./components/recomendedProducts";
import WatchVideo from "./components/watchVideo";
import Delivery from "./components/delivery";
import Newsletter from "./components/newsletter";
import Instagram from "./components/instagram";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <RecomendedProducts />
      <Category data={stuffed} />
      <Category data={wooden} />
      <WatchVideo />
      <Delivery />
      <Newsletter />
      <Instagram />
      <Footer />
    </React.Fragment>
  );
}

export default App;
