import "../Products.css";
import products from "../components/productsData";
import { useState } from "react";


function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredProducts = 
  selectedCategory === "all" 
  ? products 
  : products.filter((product) => product.category === selectedCategory
);

  return (
    <div className="products-page"> 
      <h1>Makeup Store</h1>


      <div className="filter-btns">
        <button onClick={()=> setSelectedCategory("all")}>All</button>
        <button onClick={()=> setSelectedCategory("eyes")}>Eyes</button>
        <button onClick={()=> setSelectedCategory("lips")}>Lips</button>
        <button onClick={()=> setSelectedCategory("face")}>Face</button>
      </div>
          
          <div className="products-grid">
            {filteredProducts.map((product)=>(
              <div className="product-card" key={product.id}>
                <img
                src={product.image}
                alt={product.name}
                />

                <p id="pdtnem">{product.name}</p>
                <p id="pdtcat">{product.category}</p>
                <p id="desc">{product.description}</p>
                <p id="px">{product.price}</p>

              </div>
            ))}
          </div>
            
    </div>
  );
}

export default Products;
