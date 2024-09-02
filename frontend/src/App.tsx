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
    <div className="container mx-auto h-full">
      <Header />
      
      <div className="border border-solid w-full h-[40vh] bg-cinnabon-pattern1 bg-fixed bg-cover bg-center bg-no-repeat flex justify-center items-center">
          <h1 className="font-bold text-5xl text-white font-outline-1 italic font-serif">CINNABON LUV</h1>
      </div>

      <div className="p-10">
        <h2 className="text-3xl font-bold text-center">Популярное и новинки </h2>
        <p className="text-3xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elcorrupti nam repudiandae perferendi minus repudiandae ex quaerat? Ex possimus quasi est harum voluptas qui?
         
        </p>
      </div>
      <div className="flex flex-row w-full h-1/3 border border-solid">
      <div className="w-full h-max flex flex-row gap-10 justify-center">
        <ProductCard name="Brownie" imageUrl="https://media.discordapp.net/attachments/1193647127973339268/1277904816978526218/d88f9d3b435611eeb4d5522415d39c57upscaled.png?ex=66d6c61a&is=66d5749a&hm=374db305e1ea0b7ed2812469e17ece08dd2ac42f29b40b18f23b07f63bc76edd&=&format=webp&quality=lossless&width=500&height=500"/>
        <ProductCard name="Red Velvet" imageUrl="https://media.discordapp.net/attachments/1193647127973339268/1277904819130204221/bf92d8f2644c11ef888236f64c2f96151.png?ex=66d6c61b&is=66d5749b&hm=aeae32eff420f04f93743616a324e2997b05842334504bf2bba82cdc9de94683&=&format=webp&quality=lossless&width=500&height=500"/>
        <ProductCard name="Caramel" imageUrl="https://cdn.discordapp.com/attachments/1193647127973339268/1277904818312319018/f1ed34eb737d11ee9a25beb332dff282upscaled.png?ex=66d6c61b&is=66d5749b&hm=f05962056791fbcae23fb070ef0cac36a6f3c8ce0405f33136854e7cf2fc1d12&"/>

      </div>

      <div className="border border-solid w-96 h-24 m-5 self-center">
        смотреть весь каталог!
      </div>
      </div>
    

        
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