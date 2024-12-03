import { useState, useEffect } from 'react'
import Pokemon from './components/pokemon'
import Header from './components/header'

import './output.css'

function App() {

  const BASE_URL = import.meta.env.VITE_BASE_URL_API

  
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  // 
  
  useEffect(() => {

    async function callApi() {

      try {
        const response = await fetch(`${BASE_URL}pokemon/?limit=10`)
        
        if( !response.ok) {
          throw new Error('Une erreur de récupération des données est survenue !')
        }

        const data = await response.json();
        const results = await data.results;
      console.log(results);
      
        setPokemons(results);
        setLoading(false);

        
      } catch (error) {

        console.error(error);
        
      }
      
    }
    
    callApi();

  }, [])



  return (
    <>
    <Header />
    { pokemons && !loading && (
         <div  className='flex flex-wrap justify-evenly min-h-full'>
        

        {pokemons.map((poke, index) => {
          let pokeUri : string = poke.url.replace("https://pokeapi.co/api/v2/","")
            return (
                  <Pokemon key={index} url={pokeUri}/>
            )
      })}

     </div>

    )}
         
  </>
  )
}

export default App
