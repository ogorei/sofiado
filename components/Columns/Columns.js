export const Columns = ({children, isStackedOnMobile}) => {
  return(
    <div className="my-10 text-base">
     <div
        className={`max-w-6xl mx-auto items-center ${
        isStackedOnMobile ? "block md:flex" : "flex"
        }`}
      >
        {children}
      </div>

    </div>
  )

}