import React, { useEffect, useState } from 'react'
import { MovieCard } from './moviecard'

const Movie = () => {
     const [values,setValues] = useState([])
    const findmovie = async(item)=>{
        const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=d7cf4fbd&s=${item?.length>1?`${item}`:'hanuman'}`)
        const data = await res.json();
        setValues(data.Search);
    }
    useEffect(()=>{
        findmovie()
    },[])
  return (
    <div className='movie' style={{"display":"flex","flexDirection":"column","justifyContent":"space-around","alignItems":"center","width":"100vw","minWidth":"50rem","height":"auto","minHeight":"100vh"}}>
        <div style={{"marginTop":"10rem","display":"flex","alignItems":"center","flexDirection":"column"}}>
        <h1 style={{"fontSize":"3.5rem","width":"40rem","fontFamily":"sans-serif","color":"white","textAlign":"center"}}>Welcome to the Movie search app</h1>
        <p style={{"fontSize":"2.5rem","color":"hotpink","fontFamily":"monospace","marginTop":"4rem","textAlign":"center"}}>Search your fav movies in seconds!</p>
        <input type={'search'} placeholder='Search Your Movie' onChange={(e)=>findmovie(e.target.value)} />
        </div>
        <div style={{"display":"flex","flexDirection":"row","justifyContent":"center","width":"100vw","minWidth":"50rem","flexWrap":"wrap","marginTop":"5rem"}}>
            {values?
               values.map((ite,id)=>{
                    return(
                        <MovieCard ite={ite} key={id} />
                    )
                })
                :<h1 style={{"color":"white"}}>Loading your movies..</h1>
            }
        </div>
    </div>
  )
}

export default Movie