import React, { useCallback, useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

const Moviedetail = () => {
    const navigate = useNavigate()
    const params = useParams();
     const [values,setValues] = useState([])
    const findmovie = useCallback(async()=>{
        const api= `https://www.omdbapi.com/?i=tt3896198&apikey=d7cf4fbd&S=${params.api}`
        const res = await fetch(api)
        const data = await res.json();
        setValues(data.Search);
    },[params.api])
    useEffect(()=>{
        findmovie()
    },[findmovie])

  return (
    <div className='movie' style={{"display":"flex","flexDirection":"column","justifyContent":"space-around","alignItems":"center","width":"100vw","minWidth":"50rem","height":"auto","minHeight":"100vh"}}>
        <div style={{"marginTop":"10rem"}}>
        <h1 style={{"fontSize":"3.5rem","width":"40rem","fontFamily":"sans-serif","color":"white","marginLeft":"2rem","textAlign":"center"}}>Movie search app</h1>
        <p style={{"fontSize":"2.5rem","color":"white","fontFamily":"monospace","marginTop":"4rem","textAlign":"center"}}>Here are the details for your movie <span style={{"color":"yellow"}}>{params.api}</span></p>
        </div>
        <div style={{"display":"flex","flexDirection":"row","justifyContent":"center","width":"100vw","minWidth":"50rem","flexWrap":"wrap","marginTop":"5rem","alignItems":"center"}}>
            {values?
            values.map((ite,index)=>{
                    return(
                        ite.imdbID===params.id?
                        <div key={index} className='movie-card' style={{"margin":"2rem","height":"53rem","width":"35rem","display":"flex","flexDirection":"column","alignItems":"center","backgroundColor":"white"}}>
                            <img src={ite.Poster} alt="img" style={{'width':"35rem","height":"28rem"}} />
                            <h2 style={{"marginTop":"2.5rem"}}>Title: {ite.Title}</h2>     
                            <h2 style={{"marginTop":"2.5rem"}}>Year: {ite.Year}</h2>     
                            <h2 style={{"marginTop":"2.5rem"}}>Type: {ite.Type}</h2>     
                            <h2 style={{"marginTop":"2.5rem"}}>ImdbID: {ite.imdbID}</h2>            
                            <button onClick={()=>navigate('/')} style={{"marginTop":"2.5rem","width":"20rem","height":"4rem","backgroundColor":"black","color":"white","borderRadius":"3rem","cursor":"pointer"}}>Back to Home Page</button>
                        </div>
                        :null
                    )
                })
                :<h1 style={{"color":"white"}}>Finding details, have patience!!</h1>
            }
        </div>
    </div>
  )
}

export default Moviedetail