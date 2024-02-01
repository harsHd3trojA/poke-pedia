import React from "react";

interface IPokType {
  poktp: {
    slot: number;
    type: {name:string};
  };
}


  const PokType: React.FC<IPokType> = ((props) => {
  const { poktp } = props;
  
  
  
  const cl = ["red","blue"];

  return (
    <h1 className={`bg-${cl[poktp.slot-1]}-500 bg-opacity-70 ml-2 ring-1 ring-${cl[poktp.slot-1]}-500 text-xs md:text-sm px-2 py-1 rounded-full `}>
        {poktp.type.name}
    </h1>
  );
});

export default PokType;
