import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";

interface IPokAttack {
    pokatk : {
        base_stat: number;
        effort: number;
        stat: {name:string};
    };
}

const PokAttack: React.FC<IPokAttack> = (props) => {
    const pokatk = props;

    // console.log("ch",pokatk.pokatk.stat.name);
    

  return (
    <div className='flex justify-center items-center'>
      <div className='flex max-md:flex-col pt-2 md:w-full md:justify-between'>
        <h1 className='max-md:text-xs'>{pokatk.pokatk.stat.name} :</h1>
        <ProgressBar completed={pokatk.pokatk.base_stat} maxCompleted={100} width="200px" />
    </div>
    </div>
  )
}

export default PokAttack