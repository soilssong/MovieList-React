import React from 'react'


import Search from './Search'
import MovieList from './MovieList'



class App extends React.Component{
    


    state={
        movies : [
            {
                "id" : 1 ,
                "name": "The Lord of the Rings: The Fellowship of the Ring",
                "rating" : "8.8", 
                "overview" : "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.", 
                "imageUrl" : "https://images.moviesanywhere.com/198e228b071c60f5ad57e5f62fe60029/ff22cad6-2218-414d-b853-3f95d76905c7.jpg"
            },
            {
                "id" : 2 ,
                "name": "Matrix",
                "rating" : "8.7", 
                "overview" : "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.", 
                "imageUrl" : "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
            },
            {
                "id" : 3 ,
                "name": "The Dark Knight Rises",
                "rating" : "8.4", 
                "overview" : "Eight years after the Joker's reign of chaos, Batman is coerced out of exile with the assistance of the mysterious Selina Kyle in order to defend Gotham City from the vicious guerrilla terrorist Bane.", 
                "imageUrl" : "https://m.media-amazon.com/images/I/81anyi8IkDS._RI_.jpg"
            }
        ],
     
    }

    
    
    deleteMovie = (movie) => {
       
           const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
            );
           this.setState({
            movies: newMovieList
        })
            }

    render () {

      return  (

      
           <div className='container'>
            <div className = 'row'>
                <div className= 'col-lg-12'> 
                <Search/>
                </div>
            </div>

            <MovieList
             movies = {this.state.movies}  
             deleteMovieProps = {this.deleteMovie}
             
             />

          </div>

        
       )
    }
}

export default App