import React from "react";

import Header from "../../commponents/Header/Header";
import Banner from "../../commponents/banner/Banner";
import RowList from "../../commponents/Rows/RowList/RowList";
import Footer from "../../commponents/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header/>
      <Banner />
      <RowList />
      <Footer />
    </>
  );
};

export default Home;
