import React from "react";
import { useSelector, useDispatch } from 'react-redux';

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Meteorologia from "views/IndexSections/Meteorologia.js";
import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
import { getWeatherData } from '../actions/wheaterActions'
import { getWeather } from '../reducers/index'

export default function Index() {

  React.useEffect(() => {
    document.body.classList.toggle("index-page");

    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  },[]);


 /*  React.useEffect(() => {
    console.log('WeatherData', WeatherData)
  },[WeatherData]); */


  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="main">
          <Meteorologia />
          <Basics />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <JavaScript />
          <NucleoIcons />
          <Signup />
          <Examples />
          <Download />
        </div>
        <Footer />
      </div>
    </>
  );
}
