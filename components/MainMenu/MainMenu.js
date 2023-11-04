import Link from "next/link";

export const MainMenu = ({items}) => {
  return (
    <div className=" bg-neutral-50 px-5 sticky top-0 z-20 flex">
      {/* <div className="hidden md:flex p-2">
       <img className="w-fit" src="https://i.gyazo.com/24fc2aa791fc912b65e4f746f1f85296.png" />
      <p className="p-2">SOFIA°</p>
      </div> */}
      <div className="flex flex-1 justify-center md:justify-end">
        {(items || []).map((item) => (
          <div
            key={item.id}
            className="hover:bg-red-800 cursor-pointer relative group"
          >
            <div>
              <Link className="block whitespace-nowrap p-5 hover:bg-red-800 hover:text-white" href={item.destination}>
               {item.label}
              </Link>
            </div>
            {!!item.subMenuItems?.length && (
              <div className="group-hover:block hidden bg-neutral-50 text-right absolute right-0 top-full ">
                {item.subMenuItems.map((subMenuItem) => (
                  <Link className="block whitespace-nowrap p-5 hover:bg-red-800 hover:text-white" key={subMenuItem.id} href={subMenuItem.destination}>    
                      {subMenuItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="ml-3 my-auto">
         
        </div>
      </div>
    </div>
  )
}