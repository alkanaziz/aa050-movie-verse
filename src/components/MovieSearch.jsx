import React from 'react'
import { Container } from 'react-bootstrap'

function MovieSearch() {
  return (
    <Container>
    <div className='row align-items-center justify-content-center mt-4'>
        <div className='col-6'>
            <h2>MOVIE SEARCH:</h2>
        </div>
        <div className='col-6'>
            <input className='form-control' type="text" placeholder='Search for a movie' />
        </div>
    </div>
    </Container>
  )
}

export default MovieSearch