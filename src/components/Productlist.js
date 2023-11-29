import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
// import dotenv from "dotenv";

function Products() {
  const [productlist, setProductlist] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    // dotenv.config();
    axios.get(`http://localhost:7000/getProducts`).then((res) => {
      if (res.status === 500) {
        console.log("Data Not Found");
      }
      console.log(res.data);
      setProductlist(res.data);
    });
  };

  return (
    <div className="prolist">
      {console.log(typeof productlist)}
      {productlist.data?.map((item) => {
        return <ProductCard key={item.id} value={item} />;
      })}
    </div>
  );
}

export default Products;
