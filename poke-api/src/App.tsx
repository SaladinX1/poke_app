import { useState, useEffect } from 'react'
import Pokemon from './components/pokemon'

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

        console.log(data);
        for(let i of results) {
          console.log(i);
        }
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
    { pokemons && !loading && (
         <div className='min-h-full min-w-full '>
         <p className='bg-gray-500  text-center'>We are here</p>
    
         <div className='flex flex-wrap w-full  bg-green-400 '>


        {pokemons.map((poke, index) => {
          let pokeUri : string = poke.url.replace("https://pokeapi.co/api/v2/","")
            console.log(poke, pokeUri)
            return (
              <div key={index} className=' w-12 p-20 mt-2 text-gray-600 h-7'>
                  <p className='bg-blue-400'>{poke.name}</p>
                  <Pokemon url={pokeUri}/>
              </div>
            )
      })}

      </div>
     </div>

    )}
         
  </>
  )
}

export default App
