import PokCard from "@/app/component/PokCard";
import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import Buttons from "@/app/component/Button";

const limit = 20;

export default function Main() {


  const [data, setData] = useState<Array<{ url: string; name: string }>>([]);
  const [currentPage, setCurrentPage] = useState(1);

const fetchPokemonData = async (page: number) => {
  const offset = (page - 1) * limit;
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    setData(data.results);
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
};

useEffect(() => {
  fetchPokemonData(currentPage);
}, [currentPage]);

const handleNextPage = () => {
  setCurrentPage((prevPage) => prevPage + 1);
};

const handlePrevPage = () => {
  setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
};

  return (
    <>
    <Buttons numb={currentPage} handleNext={handleNextPage} handlePrev={handlePrevPage} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 p-10 grid-flow-row gap-10">
        {data.map((item) => {
            return (
              <>
                <PokCard pokemon={item} />
              </>
            );
          })}
      </div>
    </>
  );
}
