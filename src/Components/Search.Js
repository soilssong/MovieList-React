import React from 'react'


class Search extends React.Component{


  

    handleFormSubmit  = (event) =>{
        event.preventDefault();
    }
    render ()
    {

        return(  

         <form onSubmit={this.handleFormSubmit}>
            <div className='form-row mb-5'> 
                <div className='col-12'>
                     <input type = "text" 
                     className = "form-control"
                      placeholder='Search a movie'
                       onChange={this.props.SearchMovieProp}>
                    
                       </input>
                </div>
            </div>
           
           
          </form>

        )
    }
}

export default Search