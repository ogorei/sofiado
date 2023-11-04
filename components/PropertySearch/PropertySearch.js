import { useEffect, useState } from "react"
import { Results } from "./Results";

export const PropertySearch = () => {
  const [useproducts, setProducts] = useState([])
  useEffect(() => {
    const search = async()=>{
      const data = await fetch("/api/search")
      const products = await data.json()
      setProducts(products.products)
    };
    search();
  }, [])
  return(
    <Results products={useproducts} />
  )
}