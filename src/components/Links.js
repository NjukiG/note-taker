import React from 'react';
// import { Link } from 'react-router-dom';

function Links() {
  return (
    <div style={{paddingTop: '4rem'}} className='card-container'>
        <div className='about-form card-form card' style={{width: '18rem', backgroundColor: 'aqua', marginTop: '2px'}}>
            <h2>Link:</h2>
                <a style={{textDecoration: 'none'}} href='https://michael-murage.github.io/Portfolio/'>My portfolio</a>
        </div>
        <div className='about-form card-form card' style={{width: '18rem', backgroundColor: 'aqua', marginTop: '2px'}}>
            <h2>Other link:</h2>
                <a style={{textDecoration: 'none'}} href='https://njukig.github.io/random-joke-generator/'>Random Jokes Generator</a>
        </div>
        <p>Above are links to my Portfolio and my Random Jokes Generator App project</p>
    </div>
  )
}

export default Links;