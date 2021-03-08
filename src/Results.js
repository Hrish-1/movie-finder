import React, { useState, useEffect } from 'react'
import VideoCard from './VideoCard'
import './Results.css'
import axios from './axios'
import FlipMove from 'react-flip-move'

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(selectedOption);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [selectedOption]);
  return (
    <div className='results'>
      <FlipMove>
        {
          movies.map(movie => (
            <VideoCard key={movie.id} movie={movie} />
          ))
        }
      </FlipMove>
    </div>
  )
}

export default Results
