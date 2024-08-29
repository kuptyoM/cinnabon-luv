import { FC, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from './components/ProductCard';
import Header from "./components/Header";

type TProducts = {
  name: string,
  id: number,
  image_url: string
}

const App: FC = () => {
  
  const [products, setProducts] = useState<TProducts[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/get-all");
        setProducts(response.data); 
      } catch (error) {
        console.error("Error:", error);
      }
    } 
    

    fetchProducts()
    
  }, [])


  return (
    <div className="container mx-auto w-3/5">
      <Header />

      {products[0] ?
        (<div className="grid grid-cols-3 gap-y-20 justify-items-center">
          {products.map((product, index) => (
            <ProductCard name={product.name} imageUrl={product.image_url} key={index}/>
          ))}
        </div>)
      :
        (<div>Ничего нет</div>)
      }

      
    </div>
    
  );
}

export default App;