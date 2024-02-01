export default function NavBar() {
    return (
        <>
        <nav className="flex justify-between min-[375px]:pr-2 md:px-40 bg-red-500 items-center max-[375px]:gap-x-4">
        <div>
          <img
            className="w-28"
            src="/pokLogo.webp"
            alt=""
          />
        </div>

        <div className="text-white font-semibold max-sm:text-xs">
          Click on Pokemon Card to get more Details
        </div>
      </nav>
        </>
    );
}