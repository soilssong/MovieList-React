import React from 'react'


const MovieList = (props) => {



  return (
    <div className='row' style={{marginTop : '50px'}}>
      {props.movies.map((movie) => (

        <div className='col-lg-4'>
          <div className='card mb-4 shadow-sm'>
            <img src={movie.imageURL} className="card-img-top" alt="Sample Movie" />

            <div className='card-body'>
              <h5 className='card-title'>{movie.name}</h5>
              <p className='card-text'>{movie.overview}</p>
              <div className='d-flex justify-content-between align-items-center'>
                <button type='button' onClick={(event) => props.deleteMovieProps(movie)} className='btn btn-md btn-outline-danger'>Delete</button>
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