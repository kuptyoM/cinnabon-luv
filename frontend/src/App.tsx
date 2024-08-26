import React, { useEffect, useState } from "react";
import axios from "axios";
import CityCard from './components/CityCard';


const App: React.FC = () => {
  
  const [cities, setCities] = useState<string[]>([])

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("http://localhost:8000/get-all");
        setCities(response.data); 
      } catch (error) {
        console.error("Error:", error);
      }
    } 
    

    fetchCities()
    
  }, [])

 
  return (
    <div className="container mx-auto flex flex-col content-center gap-3">
      {cities.map((city, index) => (
        <CityCard name={city} key={index} />
      ))}
    </div>
  );
}

export default App;