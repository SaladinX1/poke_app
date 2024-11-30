import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


const BASE_URL = import.meta.env.VITE_BASE_URL_API

export default function Pokemon({url}) {

    const [pokeInfo, setPokeInfo] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {

    try {
      
      const fetchPokeInfo = (url: string) => {
        fetch(`${BASE_URL}${url}`)
        .then(data => data.json())
        .then(res => {
          setLoading(false);
          console.log(res);
          setPokeInfo(res)
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
  }, [])

    return 
        <>
        {/* {!loading && pokeInfo && (
          <div className=''>

          </div>
        )} */}
        </>
  }


