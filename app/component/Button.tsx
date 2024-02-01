
export default function Buttons(props: any) {
  return (
    <div className="flex justify-end px-6 sm:px-10 gap-x-2 sm:gap-x-4 pt-4">
      <button className={`bg-white max-sm:text-sm rounded-full py-1 px-4 sm:py-2 border-[1px] border-black shadow-md ${props.numb == 1 ? "invisible" : ""} `} onClick={() => {
        props.handlePrev();
      }}>
        Prev
      </button>
      <button className={`bg-white max-sm:text-sm rounded-full py-1 px-4 sm:py-2 border-[1px] border-black shadow-md ${props.numb == 66 ? "invisible" : ""} `} onClick={() => {
        props.handleNext();
      }}>
        Next
      </button>
    </div>
  );
}
