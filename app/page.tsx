"use client";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import PokCard from "./component/PokCard";
import Buttons from "./component/Button";
import Main from "./pages/mainPage";
import { Anybody } from "next/font/google";

export default function Home() {



  // const [data, setData] = useState([]);

  // const fnGetData = async (obj) => {
  //   try {
  //     const response = await axios.request(obj);
  //     console.log("dt--", response.data);
  //     setData(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fnGetData(options);
  //   // setLinksValue();
  // }, []);

  // console.log("Fst", prevLink);

    

  return (
    <div className="bg-gray-200">
      <div className="">
        <Main/>
      </div>
    </div>
  );
}
