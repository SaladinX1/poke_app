
import { useState } from 'react'
import { useEffect } from 'react'


const BASE_URL = import.meta.env.VITE_BASE_URL_API

export default function Pokemon({url}) {

    const [pokeInfo , setPokeInfo] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {

    try {
      
      const fetchPokeInfo = (url: string) => {
        fetch(`${BASE_URL}${url}`)
        .then(data => data.json())
        .then(res => {
          console.log(res);
          setPokeInfo(res)
          setLoading(false);

        })
        .catch(error => {
          console.log(error)
          throw new Error('Les données du Pokemon ont échoué à la récupération');
          })
      } 

      fetchPokeInfo(url);

    } catch(error) {
      console.log(error);
    }
  }, [url])

    return <>

         {!loading && pokeInfo && (
          <div className='flex flex-col p-2 hover:transition-all hover:scale-125 bg-green-400 m-4 cursor-pointer rounded-xl '>
               <p><img className='h-full w-full' src={pokeInfo.sprites.front_default} alt="image"></img></p>
              <p className='block w-auto'>{pokeInfo.name}</p>
              <p className='block w-auto'>id : {pokeInfo.id}</p>
              <p className='block w-auto'>Poids : {pokeInfo.weight} kg</p>
              <p className='block w-auto'>Taille : {pokeInfo.height}</p>
              <p className='block w-auto'>Cap. spé. : {pokeInfo.abilities[0].ability.name}</p>
          </div>
        )} 

        </>
  }


