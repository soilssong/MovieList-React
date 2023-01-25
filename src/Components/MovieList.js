import React from 'react'
import { Link } from 'react-router-dom';

const MovieList = (props) => {


  const truncateString =(string,maxLength) =>{
  if(!string) return null;
    if(string.length <= maxLength) return string;
    return `${string.substring(0,maxLength)}...`
  }


  return (
    <div className='row' style={{marginTop : '100px'}}>
      {props.movies.map((movie) => (

        <div className='col-lg-4'>
          <div className='card mb-4 shadow-sm'>
            <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />

            <div className='card-body'>
              <h5 className='card-title'>{movie.name}</h5>
              <p className='card-text'>{truncateString(movie.overview,100)}</p>
              <div className='d-flex justify-content-between align-items-center'>
                <button type='button' onClick={(event) => props.deleteMovieProps(movie)} className='btn btn-md btn-outline-danger'>Delete</button>
                <Link type='button' to={`edit/${movie.id}`} className='btn btn-md btn-outline-primary'> Edit</Link>
                <button type="button" class="btn btn-primary">
                  IMDB RATE: <span class="badge badge-secondary">{movie.rating}</span>
                </button>


              </div>
            </div>
          </div>

        </div>


      ))}
    </div>

  )

}

export default MovieList