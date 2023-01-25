import React from 'react'
import { Link } from 'react-router-dom';


class Search extends React.Component{


  

    handleFormSubmit  = (event) =>{
        event.preventDefault();
    }
    render ()
    {

        return(  

         <form onSubmit={this.handleFormSubmit} style={{marginTop : '50px'}}> 
            <div className='row'> 
                <div className='col-sm-10'>
                     <input type = "text" 
                     className = "form-control"
                      placeholder='Search a movie'
                       onChange={this.props.SearchMovieProp}>
                    
                       </input>
                </div>

                
                <div className='col-sm-2'>
                <Link
                                to="/add"
                                type="button" 
                                className="btn btn-md btn-danger"
                                style={{float:'right'}}>Add Movie
                        </Link>
                </div>
              


               
            </div>
           
           
          </form>

        )
    }
}

export default Search