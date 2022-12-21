import { cleanup } from '@testing-library/react'
import React, { useEffect, useState } from 'react'
import { API_KEY ,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './banner.css'


function Banner() {
    const [Movie, setMovie] = useState()

    useEffect(() => {
      
        axios.get(`local:690/`, ).then((response) => {
            console.log(response.data.results[0])
            setMovie(response.data.results[0])
        })
         }
        , [])

       
    return (
        <div
            
        style={{backgroundImage:`url(${Movie ? imageUrl+Movie.backdrop_path: ""})`}}
       
        className='banner'>
            <div className='content'>
                <h1 className='title'>{Movie ? Movie.title : ""}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>

                </div>
                <h1 className='descrition'>{Movie ? Movie.overview : ""}</h1>

            </div>
            <div className="fade_bottom"></div>

        
        </div>

    )
}

export default Banner