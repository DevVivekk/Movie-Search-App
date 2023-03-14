import React from 'react'
import { useNavigate } from 'react-router-dom'

export const MovieCard = ({ite}) => {
    const navigate = useNavigate()
    const onClickk=(detailapi,id)=>{
        navigate(`/details/${detailapi}/${id}`)
    }
  return (
    <div>
    <div className='movie-card' style={{"margin":"2rem","height":"30rem","width":"25rem","display":"flex","justifyContent":"center","flexDirection":"column","alignItems":"center","backgroundColor":"white"}}>
                            <img src={ite.Poster} alt="img" style={{'width':"20rem","height":"20rem"}} />
                            <h2 style={{"marginTop":"2rem"}}>{ite.Title}</h2>            
                            <button onClick={()=>onClickk(ite.Title,ite.imdbID)} style={{"width":"12rem","height":"3rem","marginTop":"2rem","backgroundColor":"green","borderRadius":"2rem","color":"white","cursor":"pointer"}}>More Info</button>
                        </div>
    </div>
  )
}
