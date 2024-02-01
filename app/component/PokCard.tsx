import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import PokType from "./PokType";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PokAttack from "./PokAttack";

interface IPokCard {
  pokemon: {
    name: string;
    url: string;
  };
}

const PokCard: React.FC<IPokCard> = (props) => {
  const { pokemon } = props;
  const [pokDetails, setPokDetails] = useState<any>(undefined);
  const [pokImg, setPokImg] = useState<any>(undefined);
  const [pokStat, setPokStat] = useState<any>(undefined);
  const [isModalOpen, setModalOpen] = useState<any>(false);
  const [pkType, setPkType] = useState<any>(undefined);

  const url = pokemon.url;

  useEffect(() => {
    fetchPokemonDetails();
  }, [props]);

  const fetchPokemonDetails = async () => {
    try {
      const response = await axios.get(url);
      // console.log("res--", response.data.stats);
      setPokDetails(response.data);
      setPkType(response.data.types);
      setPokImg(response.data.sprites);
      setPokStat(response.data.stats);
    } catch (err) {
      console.log("Erro : ", err);
    }
  };


  console.log("pp--",props);


  const cl = ["red", "blue", "green"];
  return (
    <>
      <div className="cursor-pointer" onClick={() => setModalOpen(true)}>
        {pokDetails ? (
          <div className="flex flex-col justify-center items-center rounded-xl drop-shadow-md p-10 bg-white pointer-events-auto">
            {pokDetails && (
              <img src={pokDetails.sprites.front_default} alt="pokemon" />
            )}
            <h1 className="pb-3">{pokDetails.name}</h1>
            <div className="">
              <span className=" bg-blue-500 bg-opacity-20 ring-1 ring-blue-500 text-sm px-2 py-1 rounded-full">
                {pokDetails.types[0].type.name}
              </span>
            </div>
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </div>
      <ReactModal
        isOpen={isModalOpen}
        overlayClassName="Overlay"
        className="Modal"
      >
        <button onClick={() => setModalOpen(false)}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="red"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>{" "}
          
        </button>
        {pokDetails ? (
          <div className="flex flex-col text-white bg-black bg-opacity-80 rounded-xl drop-shadow-md p-2 pointer-events-auto">
            <h1 className=" place-self-start ">#{pokDetails.id}</h1>

            {pokDetails && (
              <Carousel autoFocus={false} showThumbs={false} width={"full"} dynamicHeight>
                <div>
                  <img src={pokImg.front_default} />
                </div>
                <div>
                  <img src={pokImg.front_shiny} />
                </div>
              </Carousel>
            )}
            <h1 className="text-2xl flex justify-center items-center max-md:text-base">
              {pokDetails.name}
            </h1>

            <div className="grid md:grid-cols-2 grid-flow-row pt-10  gap-y-4 max-md:text-xs">
              <div className="flex justify-center items-center">
                <h1>Height :&nbsp;</h1>
                <h1 className="">{pokDetails.height}</h1>
              </div>
              <div className="flex justify-center items-center">
                <h1>Weight :&nbsp;</h1>
                <h1 className="">{pokDetails.weight}</h1>
              </div>
              <div className="flex justify-center items-center">
                <h1>Experience :&nbsp;</h1>
                <h1 className="">{pokDetails.base_experience}</h1>
              </div>
              <div className="flex justify-center items-center">
                <h1>Order :&nbsp;</h1>
                <h1 className="">{pokDetails.order}</h1>
              </div>
            </div>

            <div className="pt-6">
              <h1 className="flex justify-center items-center md:text-2xl">
                Performance
              </h1>
              {pokStat.map((st: { bstat: number; effort: number; stat: [object]; }) => {
                console.log("st--", st);
                return <PokAttack pokatk={st} />;
              })}
            </div>

            <div className="flex justify-center items-center pt-10 pb-4">
              <h1 className="max-md:text-sm">Type :&nbsp;</h1>

              {pkType.map((tp: { st: number; tp: [object]; }) => {
                console.log("in--", tp);

                return <PokType poktp={tp} />;
              })}
            </div>
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </ReactModal>
    </>
  );
};

export default PokCard;
