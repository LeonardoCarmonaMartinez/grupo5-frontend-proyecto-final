import { useContext } from "react";
import MyContext from "../MyContext";

export default function MinMax () {
    const { products, setPriceFilter, minPrice, maxPrice } = useContext(MyContext);
    
    if (minPrice === 0 && maxPrice === 0) {
    setPriceFilter(products)
    } if (minPrice !== 0 || maxPrice !== 0) {
    setPriceFilter()
    }
  };
