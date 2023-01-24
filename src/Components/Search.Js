import React from 'react'


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
              <button type='button' className='btn btn-md btn-danger' style={{float:'right'}}>
                Add Movie

              </button>
                </div>
              


               
            </div>
           
           
          </form>

        )
    }
}

export default Search